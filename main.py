import mysql.connector
import pickle

class Pokemon:
    def __init__(self, numero, nombre, peso, altura, tipos):
        self.numero = numero
        self.nombre = nombre
        self.peso = peso
        self.altura = altura
        self.tipos = tipos

    def mostrar(self):
        print(f"#{self.numero} - {self.nombre}")
        print(f"Peso: {self.peso}kg")
        print(f"Altura: {self.altura}m")
        print("Tipo: " + ", ".join(self.tipos))
        print()


print("--- EJERCICIO 1: LECTURA Y OBJETOS ---")

lista_pokemons = []
lista_erroneas = []

try:
    f = open("pokemon.txt", "r")

    for linea in f:
        datos = linea.strip().split(", ")

        # Saltar líneas vacías si las hubiera
        if not datos or datos == ['']:
            continue

        # VALIDACIÓN: Longitud < 5  O  Primer dato no es dígito
        if len(datos) < 5 or not datos[0].isdigit():
            lista_erroneas.append(linea.strip())
        else:
            # Creación del objeto
            num = int(datos[0])
            nom = datos[1]
            peso = float(datos[2])
            alt = float(datos[3])
            tipos = datos[4:]  # Del 4 al final (1 o 2 tipos)

            nuevo_poke = Pokemon(num, nom, peso, alt, tipos)
            lista_pokemons.append(nuevo_poke)

    f.close()

    # 1. MOSTRAR ERRORES (Como pide el enunciado)
    if lista_erroneas:
        print(f"{len(lista_erroneas)} Líneas erroneas en el fichero:")
        for error in lista_erroneas:
            print(error)
        print("-" * 30)

    # 2. MOSTRAR OBJETOS CORRECTOS
    print("DATOS CARGADOS EN MEMORIA:")
    for poke in lista_pokemons:
        poke.mostrar()

except FileNotFoundError:
    print("Error: No se encuentra el archivo 'pokemon.txt'")

# ==============================================================================
# ENUNCIADO EJERCICIO 2: FICHEROS BINARIOS
# ==============================================================================
# 1. Grabar la lista de objetos en un fichero binario 'pokemons.bin'.
#    (Debe funcionar con un número indeterminado de objetos).
# 2. Volver a leer el fichero y mostrar los datos recuperados.
# ==============================================================================

print("\n--- EJERCICIO 2: FICHEROS BINARIOS ---")
archivo_bin = "pokemons.bin"

# PARTE A: GRABAR
try:
    # 'wb' = Write Binary
    f_bin = open(archivo_bin, "wb")
    pickle.dump(lista_pokemons, f_bin)  # Grabamos la lista entera
    f_bin.close()
    print(f"-> Fichero binario grabado con {len(lista_pokemons)} objetos.")
except Exception as e:
    print(f"Error al grabar binario: {e}")

# PARTE B: LEER
try:
    print("-> Leyendo desde binario para comprobar:")
    # 'rb' = Read Binary
    f_lectura = open(archivo_bin, "rb")
    lista_recuperada = pickle.load(f_lectura)
    f_lectura.close()

    for p in lista_recuperada:
        p.mostrar()
except Exception as e:
    print(f"Error al leer binario: {e}")



def grabar_en_bd(lista_pokemon):
    conn = mysql.connector.connect(user='daw2', password='LaElipa', host='localhost', database='dwes3')

    cur = conn.cursor()

    for p in lista_pokemon:

        # 1. Comprobar si el Pokémon ya existe
        cur.execute("SELECT numero_pokedex FROM pokemon WHERE numero_pokedex = %s", (p.numero,))
        existe = cur.fetchone()

        if existe:
            print(f" El Pokémon #{p.numero} ya existe. No se insertará.")
            continue

        # 2. Insertar Pokémon
        cur.execute(
            "INSERT INTO pokemon (numero_pokedex, nombre, peso, altura) VALUES (%s, %s, %s, %s)",
            (p.numero, p.nombre, p.peso, p.altura)
        )

        # 3. Insertar tipos y relaciones
        for tipo in p.tipos:

            # Insertar tipo si no existe
            cur.execute("INSERT IGNORE INTO tipo (nombre) VALUES (%s)", (tipo,))

            # Obtener id del tipo
            cur.execute("SELECT id_tipo FROM tipo WHERE nombre = %s", (tipo,))
            id_tipo = cur.fetchone()[0]

            # Insertar relación Pokémon–tipo
            cur.execute(
                "INSERT INTO pokemon_tipo (numero_pokedex, id_tipo) VALUES (%s, %s)",
                (p.numero, id_tipo)
            )

    conn.commit()
    conn.close()
    print("\nPokémon grabados correctamente en MySQL.")

"""Ejemplo de uso"""
pokemons = [
    Pokemon(152, "Chikorita", 6.4, 0.9, ["Planta"]),
    Pokemon(158, "Totodile", 9.5, 0.6, ["Agua"]),
    Pokemon(163, "Hoothoot", 21.2, 0.7, ["Normal", "Volador"])
]

grabar_en_bd(pokemons)


