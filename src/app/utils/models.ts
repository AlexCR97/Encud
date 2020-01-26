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
          label: 'black',
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
          nombre: 'Antescedentes heredofamiliares',
          label: 'black',
          icon: 'red',
          ruta: '/antescedentes-heredofamiliares',
        },
        {
          nombre: 'Antescedentes personales',
          label: 'black',
          icon: 'red',
          ruta: '/antescedentes-personales',
        },
        {
          nombre: 'Esquemas de vacunación de niños',
          label: 'black',
          icon: 'red',
          ruta: '/esquema-vacunacion-nino',
        },
        {
          nombre: 'Esquemas de vacunación de adolescentes',
          label: 'black',
          icon: 'red',
          ruta: '/esquema-vacunacion-adol',
        },
        {
          nombre: 'Esquemas de vacunación de adultos hombres',
          label: 'black',
          icon: 'red',
          ruta: '/esquema-vacunacion-adulto-hom',
        },
        {
          nombre: 'Esquemas de vacunación de adultos mujeres',
          label: 'black',
          icon: 'red',
          ruta: '/esquema-vacunacion-adulto-muj',
        },
        {
          nombre: 'Esquemas de vacunación de ancianos',
          label: 'black',
          icon: 'red',
          ruta: '/esquema-vacunacion-anciano',
        },
    ];
    
    public static datosGenerales1 = new Array<any>();
    public static datosGenerales2 = new Array<any>();
    public static antescedentesHeredofamiliares1 = new Array<any>();
    public static antescedentesPersonales1 = new Array<any>();
    public static antescedentesPersonales2 = new Array<any>();
    public static antescedentesPersonales3 = new Array<any>();
    public static esquemaVacunacionNino1 = new Array<any>();
    public static esquemaVacunacionNino2 = new Array<any>();
    public static esquemaVacunacionNino3 = new Array<any>();
    public static esquemaVacunacionNino4 = new Array<any>();
    public static esquemaVacunacionAdolescente1 = new Array<any>();
    public static esquemaVacunacionAdolescente2 = new Array<any>();
    public static esquemaVacunacionAdolescente3 = new Array<any>();
    public static esquemaVacunacionAdolescente4 = new Array<any>();
    public static esquemaVacunacionAdolescente5 = new Array<any>();
    public static esquemaVacunacionAdolescente6 = new Array<any>();
    public static esquemaVacunacionAdultoHombre1 = new Array<any>();
    public static esquemaVacunacionAdultoHombre2 = new Array<any>();
    public static esquemaVacunacionAdultoHombre3 = new Array<any>();
    public static esquemaVacunacionAdultoMujer1 = new Array<any>();
    public static esquemaVacunacionAdultoMujer2 = new Array<any>();
    public static esquemaVacunacionAdultoMujer3 = new Array<any>();
    public static esquemaVacunacionAdultoMujer4 = new Array<any>();
    public static esquemaVacunacionAnciano1 = new Array<any>();
    public static esquemaVacunacionAnciano2 = new Array<any>();
    public static esquemaVacunacionAnciano3 = new Array<any>();
    
    //#region datos generales

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

    //#endregion

    public static addAntescedentesHeredofamiliares1() {
        let count = this.antescedentesHeredofamiliares1.length;
        let newId = `#${count + 1}`;

        this.antescedentesHeredofamiliares1.push({
            id: newId,
            padreVivo: false,
            causasFallecimientoPadre: '',
            madreViva: false,
            causasFallecimientoMadre: '',
        });
    }

    public static addAntescedentesPersonales1() {
        let count = this.antescedentesPersonales1.length;
        let newId = `#${count + 1}`;

        this.antescedentesPersonales1.push({
            id: newId,
            comeCarnes: false,
            comeVerduras: false,
            comeFrutas: false,
            cuantasVecesDiaCarne: 0,
            cuantasVecesSemanaCarne: 0,
            cuantasVecesDiaVerduras: 0,
            cuantasVecesSemanaVerduras: 0,
            cuantasVecesDiaFrutas: 0,
            cuantasVecesSemanaFrutas: 0,
        });
    }

    public static addAntescedentesPersonales2() {
        let count = this.antescedentesPersonales2.length;
        let newId = `#${count + 1}`;

        this.antescedentesPersonales2.push({
            id: newId,
            enfermedadesInfancia: '',
            enfermedadesAdultez: '',
            enfermedadesInfanciaOtras: '',
            enfermedadesAdultezOtras: '',
            otrasEnfermedadesInfancia: false,
            otrasEnfermedadesAdultez: false,
        });
    }

    public static addAntescedentesPersonales3() {
        let count = this.antescedentesPersonales3.length;
        let newId = `#${count + 1}`;

        this.antescedentesPersonales3.push({
            id: newId,
            fechaMenarca: '',
            fechaFPP: '',
            fechaFUM: '',
            ritmoMenstrual: '',

            estaEmbarazada: false,
            edadGestional: 0,
            trimestreEmbarazo: 0,
            tomaAcidoFolico: false,
            cantidadGestas: 0,
            cantidadPartos: 0,
            cantidadCesareas: 0,
            cantidadAbortos: 0,

            tieneAnticonceptivos: false,
            anticonceptivos: '',
            ultimaTomaAnticonceptivo: '',
            pruebaPapanicolaou: false,
            pruebaVPH: false,
            fechaPapanicolaou: '',
            fechaVPH: '',
        });
    }

    //#region esquemas de vacunacion

    public static addEsquemaVacunacionNino1() {
        let count = this.esquemaVacunacionNino1.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionNino1.push({
            id: newId,
            bcgUnicaAlNacer: '',
        });
    }

    public static addEsquemaVacunacionNino2() {
        let count = this.esquemaVacunacionNino2.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionNino2.push({
            id: newId,
            hepatitisBPrimeraAlNacer: '',
            hepatitisBSegunda2Meses: '',
            hepatitisBTercera6Meses: '',
        });
    }

    public static addEsquemaVacunacionNino3() {
        let count = this.esquemaVacunacionNino3.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionNino3.push({
            id: newId,
            pentavalentePrimera2Meses: '',
            pentavalenteSegunda4Meses: '',
            pentavalenteTercera6Meses: '',
            pentavalenteCuarta28Meses: '',
        });
    }

    public static addEsquemaVacunacionNino4() {
        let count = this.esquemaVacunacionNino4.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionNino4.push({
            id: newId,
            dptRefuerzo4Anios: '',
            rotavirusPrimera2Meses: '',
            rotavirusSegunda4Meses: '',
            rotavirusTercera6Meses: '',
        });
    }

    public static addEsquemaVacunacionAdolescente1() {
        let count = this.esquemaVacunacionAdolescente1.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdolescente1.push({
            id: newId,
            hepatitisBPrimera13Anios: '',
            hepatitisBSegunda4Semanas: '',
        });
    }

    public static addEsquemaVacunacionAdolescente2() {
        let count = this.esquemaVacunacionAdolescente2.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdolescente2.push({
            id: newId,
            tdRefuerzo10Anios: '',
            tdSegunda4Semanas: '',
            tdPrimeraDosisInicial: '',
        });
    }

    public static addEsquemaVacunacionAdolescente3() {
        let count = this.esquemaVacunacionAdolescente3.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdolescente3.push({
            id: newId,
            tdpaUnica20Semanas: '',
        });
    }

    public static addEsquemaVacunacionAdolescente4() {
        let count = this.esquemaVacunacionAdolescente4.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdolescente4.push({
            id: newId,
            influenzaUnicaCualquier: '',
        });
    }

    public static addEsquemaVacunacionAdolescente5() {
        let count = this.esquemaVacunacionAdolescente5.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdolescente5.push({
            id: newId,
            srPrimeraPrimerContacto: '',
            srSegunda4Semanas: '',
            srUnicaPrimerContacto: '',
        });
    }

    public static addEsquemaVacunacionAdolescente6() {
        let count = this.esquemaVacunacionAdolescente6.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdolescente6.push({
            id: newId,
            vphPrimera11Anios: '',
            vphSegunda6Meses: '',
            vphTercera6Meses: '',
        });
    }

    public static addEsquemaVacunacionAdultoHombre1() {
        let count = this.esquemaVacunacionAdultoHombre1.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdultoHombre1.push({
            id: newId,
            srSinAntescedentePrimeraPrimerContacto: '',
            srSinAntescedenteSegunda4Semanas: '',
            srEsquemaIncompletoPrimeraPrimerContacto: '',
        });
    }

    public static addEsquemaVacunacionAdultoHombre2() {
        let count = this.esquemaVacunacionAdultoHombre2.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdultoHombre2.push({
            id: newId,
            tdEsquemaCompletoRefuerzo10Anios: '',
            tdEsquemaIncompletoPrimeraInicial: '',
            tdEsquemaIncompletoSegunda1Mes: '',
            tdEsquemaIncompletoTercera12Meses: '',
        });
    }

    public static addEsquemaVacunacionAdultoHombre3() {
        let count = this.esquemaVacunacionAdultoHombre3.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdultoHombre3.push({
            id: newId,
            influenzaFactorRiesgoDosisAnual: '',
        });
    }

    public static addEsquemaVacunacionAdultoMujer1() {
        let count = this.esquemaVacunacionAdultoMujer1.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdultoMujer1.push({
            id: newId,
            srPrimeraPrimerContacto: '',
            srSegundaSemanas: '',
            srUnicaPrimerContacto: '',
        });
    }

    public static addEsquemaVacunacionAdultoMujer2() {
        let count = this.esquemaVacunacionAdultoMujer2.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdultoMujer2.push({
            id: newId,
            tdEsquemaCompletoRefuerzo10Anios: '',
            tdEsquemaIncompletoPrimeraInicial: '',
            tdEsquemaIncompletoSegunda1Mes: '',
            tdEsquemaIncompletoTercera12Meses: '',
        });
    }

    public static addEsquemaVacunacionAdultoMujer3() {
        let count = this.esquemaVacunacionAdultoMujer3.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdultoMujer3.push({
            id: newId,
            tdpaUnica20Semanas: '',
        });
    }

    public static addEsquemaVacunacionAdultoMujer4() {
        let count = this.esquemaVacunacionAdultoMujer4.length;
        let newId = `#${count + 1}`;

        this.esquemaVacunacionAdultoMujer4.push({
            id: newId,
            influenzaFactorRiesgoDosisAnual: '',
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

    //#endregion

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
        this.antescedentesHeredofamiliares1 = [];
        this.antescedentesPersonales1 = [];
        this.antescedentesPersonales2 = [];
        this.antescedentesPersonales3 = [];
        this.esquemaVacunacionNino1 = [];
        this.esquemaVacunacionNino2 = [];
        this.esquemaVacunacionNino3 = [];
        this.esquemaVacunacionNino4 = [];
        this.esquemaVacunacionAdolescente1 = [];
        this.esquemaVacunacionAdolescente2 = [];
        this.esquemaVacunacionAdolescente3 = [];
        this.esquemaVacunacionAdolescente4 = [];
        this.esquemaVacunacionAdolescente5 = [];
        this.esquemaVacunacionAdolescente6 = [];
        this.esquemaVacunacionAdultoHombre1 = [];
        this.esquemaVacunacionAdultoHombre2 = [];
        this.esquemaVacunacionAdultoHombre3 = [];
        this.esquemaVacunacionAdultoMujer1 = [];
        this.esquemaVacunacionAdultoMujer2 = [];
        this.esquemaVacunacionAdultoMujer3 = [];
        this.esquemaVacunacionAdultoMujer4 = [];
        this.esquemaVacunacionAnciano1 = [];
        this.esquemaVacunacionAnciano2 = [];
        this.esquemaVacunacionAnciano3 = [];

        for (let i = 0; i < count; i++) {
            this.addDatosGenerales1();
            this.addDatosGenerales2();
            this.addAntescedentesHeredofamiliares1();
            this.addAntescedentesPersonales1();
            this.addAntescedentesPersonales2();
            this.addAntescedentesPersonales3();
            this.addEsquemaVacunacionNino1();
            this.addEsquemaVacunacionNino2();
            this.addEsquemaVacunacionNino3();
            this.addEsquemaVacunacionNino4();
            this.addEsquemaVacunacionAdolescente1();
            this.addEsquemaVacunacionAdolescente2();
            this.addEsquemaVacunacionAdolescente3();
            this.addEsquemaVacunacionAdolescente4();
            this.addEsquemaVacunacionAdolescente5();
            this.addEsquemaVacunacionAdolescente6();
            this.addEsquemaVacunacionAdultoHombre1();
            this.addEsquemaVacunacionAdultoHombre2();
            this.addEsquemaVacunacionAdultoHombre3();
            this.addEsquemaVacunacionAdultoMujer1();
            this.addEsquemaVacunacionAdultoMujer2();
            this.addEsquemaVacunacionAdultoMujer3();
            this.addEsquemaVacunacionAdultoMujer4();
            this.addEsquemaVacunacionAnciano1();
            this.addEsquemaVacunacionAnciano2();
            this.addEsquemaVacunacionAnciano3();
        }

        //console.log(Models.toString());
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
