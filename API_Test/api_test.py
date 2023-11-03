from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

profesores = [
    {
        "id": 1,
        "nombre": "Juan Pérez",
        "cursos": [
            {
                "id": 1,
                "nombre": "Matemáticas",
                "codigo": "PGY0000",
                "seccion": "013V",
                "alumnos": [
                    {"id": 1, "nombre": "Luis"},
                    {"id": 2, "nombre": "María"}
                ]
            },
            {
                "id": 2,
                "nombre": "Fisica",
                "codigo": "PGY0000",
                "seccion": "015V",
                "alumnos": []
            },
            {
                "id": 3,
                "nombre": "Quimica",
                "codigo": "PGY0000",
                "seccion": "018V",
                "alumnos": []
            }
        ]
    },
     {
        "id": 2,
        "nombre": "Marcelo Sanhueza",
        "cursos": [
            {
                "id": 1,
                "nombre": "Matemáticas",
                "codigo": "PGY0000",
                "seccion": "013V",
                "alumnos": [
                    {"id": 1, "nombre": "Luis"},
                    {"id": 2, "nombre": "María"}
                ]
            },
            {
                "id": 2,
                "nombre": "Fisica",
                "codigo": "PGY0000",
                "seccion": "015V",
                "alumnos": []
            },
            {
                "id": 3,
                "nombre": "Quimica",
                "codigo": "PGY0000",
                "seccion": "018V",
                "alumnos": []
            }
        ]
    },
     {
        "id": 3,
        "nombre": "Diego Cares",
        "cursos": [
            {
                "id": 1,
                "nombre": "Base de datos",
                "codigo": "PGY0000",
                "seccion": "013V",
                "alumnos": [
                    {"id": 1, "nombre": "Luis"},
                    {"id": 2, "nombre": "María"}
                ]
            },
            {
                "id": 2,
                "nombre": "Fisica",
                "codigo": "PGY0000",
                "seccion": "015V",
                "alumnos": []
            },
            {
                "id": 3,
                "nombre": "Quimica",
                "codigo": "PGY0000",
                "seccion": "018V",
                "alumnos": []
            }
        ]
    },
     {
        "id": 4,
        "nombre": "Orlando Sepulveda",
        "cursos": [
            {
                "id": 1,
                "nombre": "Ingles",
                "codigo": "PGY0000",
                "seccion": "013V",
                "alumnos": [
                    {"id": 1, "nombre": "Luis"},
                    {"id": 2, "nombre": "María"}
                ]
            },
            {
                "id": 2,
                "nombre": "Fisica",
                "codigo": "PGY0000",
                "seccion": "015V",
                "alumnos": []
            },
            {
                "id": 3,
                "nombre": "Quimica",
                "codigo": "PGY0000",
                "seccion": "018V",
                "alumnos": []
            }
        ]
    }
]


usuarios = [
    {
        "id": 1,
        "user": "docente",
        "password": "password1",
        "nombre": "Juan Perez",
        "perfil":  1,
        "correo": "docente@gmail.com"
    },
    {
        "id": 2,
        "user": "alumno",
        "password": "password2",
        "nombre": "Luis Gonzalez",
        "perfil": 2,
        "correo": "alumno@gmail.com"
    }
]


@app.route('/api/profesores', methods=['GET'])
def obtener_profesores():
    return jsonify(profesores)

@app.route('/api/cursos', methods=['GET'])
def obtener_cursos():
    cursos_profesores = []
    for profesor in profesores:
        for curso in profesor['cursos']:
            cursos_profesores.append(curso)
    return jsonify(cursos_profesores)


if __name__ == '__main__':
    app.run(debug=True)
