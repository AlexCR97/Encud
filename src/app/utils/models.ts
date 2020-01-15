export class Models {

    public static readonly secciones = [
        {
          nombre: 'Georeferenciazión',
          label: 'black',
          icon: 'red',
          ruta: '/georeferenciazion',
        },
        {
          nombre: 'Vivienda',
          label: 'lightgray',
          icon: 'red',
          ruta: '/vivienda',
        },
        {
          nombre: 'Datos generales de la familia',
          label: 'lightgray',
          icon: 'red',
          ruta: '/datos-generales',
        },
        {
          nombre: 'Esquemas de vacunación',
          label: 'lightgray',
          icon: 'red',
          ruta: '/esquema-vacunacion-anciano',
        },
    ];

    public static datosGenerales1 = new Array<any>();
    public static datosGenerales2 = new Array<any>();
    public static esquemaVacunacionAnciano1 = new Array<any>();
    public static esquemaVacunacionAnciano2 = new Array<any>();
    public static esquemaVacunacionAnciano3 = new Array<any>();
    
    public static addDatosGenerales1() {
        let count = this.datosGenerales1.length;
        let newId = `#${count + 1}`;

        this.datosGenerales1.push({
            id: newId,
            apellidoPaterno: '',
            apellidoMaterno: '',
            nombres: '',
            sexo: '',
            curp: '',
            fechaNacimiento: '',
        });
    }

    public static addDatosGenerales2() {
        let count = this.datosGenerales2.length;
        let newId = `#${count + 1}`;

        this.datosGenerales2.push({
            id: newId,
            edad: undefined,
            ocupacion: '',
            estadoCivil: '',
            nacionalidad: '',
            residenciaAnterior: '',
            ultimoGradoEstudios: '',
        });
    }

    public static addEsquemaVacunacionAnciano1() {
        let count = this.esquemaVacunacionAnciano1.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAnciano1.push({
            id: newId,
            neumococicaUnaDosisAnual: '',
        });
    }

    public static addEsquemaVacunacionAnciano2() {
        let count = this.esquemaVacunacionAnciano2.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAnciano2.push({
            id: newId,
            tdRefuerzoCada10Anios: '',
            tdPrimeraDosisInicial: '',
            tdSegunda1MesDespues: '',
            tdSegunda12MesesDespues: '',
        });
    }

    public static addEsquemaVacunacionAnciano3() {
        let count = this.esquemaVacunacionAnciano3.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAnciano3.push({
            id: newId,
            influenzaUnaDosisAnual: '',
        });
    }

    public static nombreCompleto(id: string): string {
        for (let i of Models.datosGenerales1) {
            if (i.id == id) {
                return `${i.nombres} ${i.apellidoPaterno} ${i.apellidoMaterno}`;
            }
        }
        return undefined;
    }
    
    public static seccionTerminar(nombre: string) {
        let seccion = this.secciones.find(s => s.nombre == nombre);

        if (seccion == undefined) {
            return;
        }

        seccion.label = 'black';
        seccion.icon = 'green';
    }

    public static seccionPendiente(nombre: string) {
        let seccion = this.secciones.find(s => s.nombre == nombre);

        if (seccion == undefined) {
            return;
        }

        seccion.label = 'black';
        seccion.icon = 'red';
    }

    public static seccionInhabilitar(nombre: string) {
        let seccion = this.secciones.find(s => s.nombre == nombre);

        if (seccion == undefined) {
            return;
        }

        seccion.label = 'lightgray';
        seccion.icon = 'red';
    }

    public static setCount(count: number) {
        console.log('Setting global count: ' + count);

        this.datosGenerales1 = [];
        this.datosGenerales2 = [];
        this.esquemaVacunacionAnciano1 = [];
        this.esquemaVacunacionAnciano2 = [];
        this.esquemaVacunacionAnciano3 = [];

        for (let i = 0; i < count; i++) {
            this.addDatosGenerales1();
            this.addDatosGenerales2();
            this.addEsquemaVacunacionAnciano1();
            this.addEsquemaVacunacionAnciano2();
            this.addEsquemaVacunacionAnciano3();
        }

        console.log(Models.toString());
    }

    public static getCount() {
        return this.datosGenerales1.length;
    }

    public static verificarEncuesta(): boolean {
        for (let i of this.secciones) {
            if (i.icon == 'red') {
                return false;
            }
        }
        return true;
    }

    private static jsonArrayToString(array: Array<any>) {
        let str = '';

        for (let i of array) {
            str += JSON.stringify(i) + '\n';
        }

        return str;
    }

    public static toString(): string {
        return (
            'Datos generales 1:\n' + this.jsonArrayToString(Models.datosGenerales1) + '\n' +
            'Datos generales 2:\n' + this.jsonArrayToString(Models.datosGenerales2) + '\n' +
            'Esquema vacunacion anciano 1:\n' + this.jsonArrayToString(Models.esquemaVacunacionAnciano1) + '\n' +
            'Esquema vacunacion anciano 2:\n' + this.jsonArrayToString(Models.esquemaVacunacionAnciano2) + '\n' +
            'Esquema vacunacion anciano 3:\n' + this.jsonArrayToString(Models.esquemaVacunacionAnciano3) + '\n' +
            ''
        );
    }
}
