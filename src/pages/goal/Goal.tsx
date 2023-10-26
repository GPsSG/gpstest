import { IonAvatar, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonNote, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { add, closeCircle, remove } from 'ionicons/icons';
import { compareAsc, format } from 'date-fns'
import './Goal.css';

import { useEffect, useState } from 'react';


const Goal: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [parejas, setParejas] = useState<any>([]);

    useEffect(() => {
        search();
    }, []);

    const search = () => {
        const datosDeEjemplo = [
            {
                id: '1',
                groupId: 'PLider',
                name: 'Esteban Enriquez',
                dateOfBirth: '65' //,daylyStudy:[]
            },
            {
                id: '2',
                groupId: 'PLider',
                name: 'Edgar Rivera',
                dateOfBirth: '40' //,daylyStudy:[]
            }
        ]
        setParejas(datosDeEjemplo);
    }


    interface Asistencia {
        id: number;
        name: string;
    }
    interface EC {
        id: number;
        name: string;
    }

    interface Leccion {
        id: number;
        name: string;
    }

    const asistencias: Asistencia[] = [
        {
            id: 1,
            name: 'P'
        },
        {
            id: 2,
            name: 'P7'
        },
        {
            id: 3,
            name: 'A'
        },
    ];

    const estadocivil: EC[] = [
        {
            id: 1,
            name: 'Soltero'
        },
        {
            id: 2,
            name: 'Casado'
        },
        {
            id: 3,
            name: 'Divorciado'
        },
        {
            id: 4,
            name: 'Viudo'
        },
    ];
    const lecciones: Leccion[] = [
        {
            id: 1,
            name: '1'
        },
        {
            id: 2,
            name: '2'
        },
        {
            id: 3,
            name: '3'
        },
        {
            id: 4,
            name: '4'
        },
        {
            id: 5,
            name: '5'
        },
        {
            id: 6,
            name: '6'
        },
        {
            id: 7,
            name: '7'
        },
        {
            id: 8,
            name: '8'
        },
        {
            id: 9,
            name: '9'
        },
        {
            id: 10,
            name: '10'
        },
        {
            id: 11,
            name: '11'
        },
        {
            id: 12,
            name: '12'
        },
        {
            id: 13,
            name: '13'
        },
        {
            id: 14,
            name: '14'
        },
        {
            id: 15,
            name: '15'
        },
        {
            id: 16,
            name: '16'
        },
        {
            id: 17,
            name: '17'
        },
        {
            id: 18,
            name: '18'
        },
        {
            id: 19,
            name: '19'
        },
        {
            id: 20,
            name: '20'
        },
    ];
    const compareWith = (o1: Asistencia, o2: Asistencia) => {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    };
    const compareWithEC = (o1: EC, o2: EC) => {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    };
    const compareWithL = (o1: Leccion, o2: Leccion) => {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    };

    const isWeekday = (dateString: string) => {
        const date = new Date(dateString);
        const utcDay = date.getUTCDay();

        /**
         * Date will be enabled if it is not
         * Sunday or Saturday
         */
        return utcDay == 6;
    };

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChange = (event: { target: { value: any; }; }) => {
        setSelectedDate(event.target.value);
    };
    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar mode='ios'>
                    <IonButtons collapse={true} slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-header2 ion-title2'>{name} METAS TRIMESTRALES DEL GP</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen={true}>
                <IonHeader collapse="condense" className='ion-header'>
                    <IonToolbar>
                        <IonButtons collapse={true} slot="start">
                            {/* <IonButton >
                                <IonIcon slot="start" icon={logoFirebase}></IonIcon>
                            </IonButton> */}
                        </IonButtons>
                        <IonButtons collapse={true} slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonItem className="item-bottom">
                            <IonTitle className='ion-header ion-title'>
                                <div>
                                    <span className='ion-header ion-title span' >M</span>ETAS
                                    <span className='ion-header ion-title span'>T</span>RIMESTRALES DEL
                                    <span className='ion-header ion-title span'>GP</span>
                                </div>
                            </IonTitle>
                        </IonItem>
                    </IonToolbar>
                </IonHeader>

                <IonGrid fixed>
                    {/* <IonRow>

                        <IonCol className='ion-col-encabezado color-purple'>
                            Nombre
                        </IonCol>
                        <IonCol className='ion-col-encabezado color-blue'>
                            Estudio
                            <IonRow>
                                <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12" sizeXl='12'>
                                    <IonDatetimeButton datetime='datetime' >
                                        <IonModal keepContentsMounted={true} >
                                            <IonDatetime id='datetime'
                                                isDateEnabled={isWeekday}
                                                locale='es-ES'
                                                presentation="date" preferWheel={true}
                                                showDefaultButtons={false}
                                            />
                                        </IonModal>
                                    </IonDatetimeButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow> */}
                    {/*--------------------------- */}
                    <IonRow>

                        <IonCol className='ion-col-encabezado color-purple'>
                            Nombre
                        </IonCol>
                        <IonCol className='ion-col-encabezado color-blue'>
                            Leccion
                            <IonRow>
                                <IonCol>
                                    
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                    <IonCard mode='ios' className='ion-card-margin'>
                        <IonRow className='tableList-tr-blue'>
                            <IonCol size='auto' className='tableList-tr-col-blue'>

                            </IonCol>
                            <IonCol >
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="1 |" placeholder='Nombre' value="Doris castellanos"></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonSelect
                                            justify="end"
                                            interface="popover"
                                            aria-label="Nº"
                                            placeholder="Nº"
                                            compareWith={compareWithL}
                                            onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}
                                        >
                                            {lecciones.map((leccion) => (
                                                <IonSelectOption key={leccion.id} value={leccion}>
                                                    {leccion.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <IonRow className='tableList-tr-blue'>
                            <IonCol size='auto' className='tableList-tr-col2-blue'>

                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="2 |" placeholder='Nombre' value="Ismael Cabrera"></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                      {/*       <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="Edad" placeholder='Edad' labelPlacement="floating"  type="number" ></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol> */}
                            {/* <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonSelect
                                            justify="end"
                                            interface="popover"
                                            aria-label="EC"
                                            placeholder="EC"
                                            compareWith={compareWithEC}
                                            onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}
                                        >
                                            {estadocivil.map((ec) => (
                                                <IonSelectOption key={ec.id} value={ec}>
                                                    {ec.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol> */}
                            <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonSelect
                                            justify="end"
                                            interface="popover"
                                            aria-label="Nº"
                                            placeholder="Nº"
                                            compareWith={compareWithL}
                                            onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}
                                        >
                                            {lecciones.map((leccion) => (
                                                <IonSelectOption key={leccion.id} value={leccion}>
                                                    {leccion.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            
                        </IonRow>
                        <IonRow className='tableList-tr-blue'>
                            <IonCol size='auto' className='tableList-tr-col-blue'>

                            </IonCol>
                            <IonCol >
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="3 |" placeholder='Nombre' value=""></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonSelect
                                            justify="end"
                                            interface="popover"
                                            aria-label="Nº"
                                            placeholder="Nº"
                                            compareWith={compareWithL}
                                            onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}
                                        >
                                            {lecciones.map((leccion) => (
                                                <IonSelectOption key={leccion.id} value={leccion}>
                                                    {leccion.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCard>
{/* -----------------------------------------------------------------------*/}
                    <IonRow>

                        <IonCol className='ion-col-encabezado color-purple'>
                            Actividades del grupo pequeño
                        </IonCol>
                        <IonCol className='ion-col-encabezado color-blue'>
                            Estudio
                            <IonRow>
                                <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12" sizeXl='12'>
                                    <IonDatetimeButton datetime='datetime' >
                                        <IonModal keepContentsMounted={true} >
                                            <IonDatetime id='datetime'
                                                isDateEnabled={isWeekday}
                                                locale='es-ES'
                                                presentation="date" preferWheel={true}
                                                showDefaultButtons={false}
                                            />
                                        </IonModal>
                                    </IonDatetimeButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                {/*----------------------------------- */}
                    <IonCard mode='ios' className='ion-card-margin'>
                        <IonRow >
                            <IonCol size='auto' className='tableList-tr-col-blue'>
                            
                            </IonCol>
                            
                            <IonCol >
                                <IonRow>
                                    
                                    <IonCol >
                                        <IonChip disabled>
                                            <IonLabel>ofrenda semanal:</IonLabel>
                                        </IonChip>
                                        
                                    </IonCol>
                                    <IonCol >
                                        <IonInput label="$" labelPlacement="floating" placeholder="0" type="number"  ></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    {/*----------------------------------- */}
                    <IonCard mode='ios' className='ion-card-margin'>
                        
                        <IonRow className='tableList-tr-purple'>
                            <IonCol size='auto' className='tableList-tr-col-purple'>
                               
                               </IonCol>
                                    <IonCol >
                                        <IonInput label="Nº Visistas en la Escuela Sabatica" labelPlacement="floating" placeholder="0" fill="solid"   type="number"></IonInput>
                                    </IonCol>
                        </IonRow>
                        <IonRow className='tableList-tr-purple'>
                        <IonCol size='auto' className='tableList-tr-col-purple'>
                               
                               </IonCol>
                            <IonCol >
                                <IonInput label="Realizo Reunion Semanal" labelPlacement="floating" placeholder="0" fill="solid"   type="number"></IonInput>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                        <IonCol size='auto' className='tableList-tr-col-purple'>
                               
                               </IonCol>
                            <IonCol >
                                <IonInput label="Nº de visitas" labelPlacement="floating" placeholder="0" fill="solid"   type="number"></IonInput>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    {/*----------------------------------- */}
                    <IonRow>
                        <IonCol size='auto'>

                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-purple'>
                            <span className='ion-header ion-title span' >P</span>areja
                            <span className='ion-header ion-title span'>m</span>isionera
                            <span className='ion-header ion-title span'>l</span>ider
                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-blue'>

                        </IonCol>
                    </IonRow>
                    {/* tabla */}
                    <IonCard mode='ios' className='ion-card-margin'>
                        <IonRow >
                            <IonCol size='auto' className='tableList-tr-col-purple'>
                                <IonRow class="ion-align-items-center">

                                </IonRow>
                            </IonCol>
                            <IonCol size='auto'>
                                <IonRow class="ion-align-items-center">
                                    <IonCol >
                                        <div className='div2'>1</div><div>1 |</div>  <div>2 |</div>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="NEB" labelPlacement="floating" placeholder="0" type="number"></IonInput>
                                    </IonCol>
                                    <IonCol >
                                        <IonInput label="NPA" labelPlacement="floating" placeholder="0" type="number"></IonInput>
                                    </IonCol>
                                    <IonCol >
                                        <IonInput label="PPT" labelPlacement="floating" placeholder="0" type="number"></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    <IonRow>
                        <IonCol size='auto'>

                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-blue'>
                            <span className='ion-header2 ion-title2 span' >P</span>areja
                            <span className='ion-header2 ion-title2 span'>m</span>isionera
                            <span className='ion-header2 ion-title2 span'>a</span>sociado
                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-blue'>

                        </IonCol>
                    </IonRow>
                    <IonCard mode='ios' className='ion-card-margin'>
                        <IonRow >
                            <IonCol size='auto' className='tableList-tr-col-blue'>
                                <IonRow class="ion-align-items-center">

                                </IonRow>
                            </IonCol>
                            <IonCol size='auto'>
                                <IonRow class="ion-align-items-center">
                                    <IonCol >
                                        <div className='div2'>1</div><div>1 |</div>  <div>2 |</div>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="NEB" labelPlacement="floating" placeholder="0" type="number"></IonInput>
                                    </IonCol>
                                    <IonCol >
                                        <IonInput label="NPA" labelPlacement="floating" placeholder="0" type="number"></IonInput>
                                    </IonCol>
                                    <IonCol >
                                        <IonInput label="PPT" labelPlacement="floating" placeholder="0" type="number"></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    <IonRow>
                        <IonCol size='auto'>

                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-black'>
                            <span className='ion-header3 ion-title3 span' >P</span>areja
                            <span className='ion-header3 ion-title3 span'>m</span>isionera
                            <span className='ion-header3 ion-title3 span'>1</span>
                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-black'>

                        </IonCol>
                    </IonRow>
                    <IonCard mode='ios' className='ion-card-margin'>
                        <IonRow >
                            <IonCol size='auto' className='tableList-tr-col-black'>
                                <IonRow class="ion-align-items-center">

                                </IonRow>
                            </IonCol>
                            <IonCol size='auto'>
                                <IonRow class="ion-align-items-center">
                                    <IonCol >
                                        <div className='div2'>1</div><div>1 |</div>  <div>2 |</div>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="NEB" labelPlacement="floating" placeholder="0" type="number"></IonInput>
                                    </IonCol>
                                    <IonCol >
                                        <IonInput label="NPA" labelPlacement="floating" placeholder="0" type="number"></IonInput>
                                    </IonCol>
                                    <IonCol >
                                        <IonInput label="PPT" labelPlacement="floating" placeholder="0" type="number"></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    <IonRow>
                        <IonCol size='auto'>

                        </IonCol>
                        <IonCol className='ion-col-padding'>
                            <IonNote>* Nº Estudios biblicos [</IonNote><IonNote className='ion-note'>NEB</IonNote><IonNote>], Nº de personas ayudadas [</IonNote><IonNote className='ion-note'>NPA</IonNote><IonNote>],</IonNote> <IonNote>Participando en el proyecto de testificación [</IonNote><IonNote className='ion-note'>PPT</IonNote><IonNote>]</IonNote>
                        </IonCol>
                    </IonRow>



                    <IonRow>
                        <IonCol size='auto'>

                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-purple'>
                            <span className='ion-header ion-title span' >P</span>areja
                            <span className='ion-header ion-title span'>m</span>isionera
                            <span className='ion-header ion-title span'>l</span>ider
                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-blue'>

                        </IonCol>
                    </IonRow>
                    <IonCard mode='ios' className='ion-card-margin'>
                        <IonRow className='tableList-tr-purple'>
                            <IonCol size='auto' className='tableList-tr-col-purple'>

                            </IonCol>
                            <IonCol >
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="1 |" clearOnEdit={true} placeholder='Nombre' value="Esteban"></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12" sizeXl='12'>
                                        <IonSelect id='1'
                                            justify="end"
                                            interface="popover"
                                            aria-label="Asistencia"
                                            placeholder="Asistencia"
                                            compareWith={compareWith}
                                            onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}
                                        >
                                            {asistencias.map((asistencia) => (
                                                <IonSelectOption key={asistencia.id} value={asistencia}>
                                                    {asistencia.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='auto' className='tableList-tr-col2-purple'>

                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="2 |" placeholder='Nombre' value="Edgar Rivera"></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12" sizeXl='12'>
                                        <IonSelect id='2'
                                            justify="end"
                                            interface="popover"
                                            aria-label="Asistencia"
                                            placeholder="Asistencia"
                                            compareWith={compareWith}
                                            onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}
                                        >
                                            {asistencias.map((asistencia) => (
                                                <IonSelectOption key={asistencia.id} value={asistencia}>
                                                    {asistencia.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    <IonRow>
                        <IonCol size='auto'>

                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-blue'>
                            <span className='ion-header2 ion-title2 span' >P</span>areja
                            <span className='ion-header2 ion-title2 span'>m</span>isionera
                            <span className='ion-header2 ion-title2 span'>a</span>sociado
                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-blue'>

                        </IonCol>
                    </IonRow>
                    <IonCard mode='ios' className='ion-card-margin'>
                        <IonRow className='tableList-tr-blue'>
                            <IonCol size='auto' className='tableList-tr-col-blue'>

                            </IonCol>
                            <IonCol >
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="3 |" placeholder='Nombre' value="Doris castellanos"></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12" sizeXl='12'>
                                        <IonSelect id='3'
                                            justify="end"
                                            interface="popover"
                                            aria-label="Asistencia"
                                            placeholder="Asistencia"
                                            compareWith={compareWith}
                                            onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}
                                        >
                                            {asistencias.map((asistencia) => (
                                                <IonSelectOption key={asistencia.id} value={asistencia}>
                                                    {asistencia.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='auto' className='tableList-tr-col2-blue'>

                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="4 |" placeholder='Nombre' value="Ismael Cabrera"></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12" sizeXl='12'>
                                        <IonSelect id='4'
                                            justify="end"
                                            interface="popover"
                                            aria-label="Asistencia"
                                            placeholder="Asistencia"
                                            compareWith={compareWith}
                                            onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}
                                        >
                                            {asistencias.map((asistencia) => (
                                                <IonSelectOption key={asistencia.id} value={asistencia}>
                                                    {asistencia.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    <IonRow>
                        <IonCol size='auto'>

                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-black'>
                            <span className='ion-header3 ion-title3 span' >P</span>areja
                            <span className='ion-header3 ion-title3 span'>m</span>isionera
                            <span className='ion-header3 ion-title3 span'>1</span>
                        </IonCol>
                        <IonCol className='ion-col-encabezado2 color-black'>

                        </IonCol>
                    </IonRow>
                    <IonCard mode='ios' className='ion-card-margin'>
                        <IonRow className='tableList-tr-black'>
                            <IonCol size='auto' className='tableList-tr-col-black'>

                            </IonCol>
                            <IonCol >
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="5 |" placeholder='Nombre' value="Virgen Guzman"></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12" sizeXl='12'>
                                        <IonSelect id='3'
                                            justify="end"
                                            interface="popover"
                                            aria-label="Asistencia"
                                            placeholder="Asistencia"
                                            compareWith={compareWith}
                                            onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}
                                        >
                                            {asistencias.map((asistencia) => (
                                                <IonSelectOption key={asistencia.id} value={asistencia}>
                                                    {asistencia.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='auto' className='tableList-tr-col2-black'>

                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol >
                                        <IonInput label="6 |" placeholder='Nombre' value="David Rasgado"></IonInput>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12" sizeXl='12'>
                                        <IonSelect id='4'
                                            justify="end"
                                            interface="popover"
                                            aria-label="Asistencia"
                                            placeholder="Asistencia"
                                            compareWith={compareWith}
                                            onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}
                                        >
                                            {asistencias.map((asistencia) => (
                                                <IonSelectOption key={asistencia.id} value={asistencia}>
                                                    {asistencia.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCard>
                </IonGrid>



                <IonGrid fixed>
                    <IonRow>
                        <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="6">
                            <IonRow><IonCol className='ion-col-text-alingn color-blue'>ESTUDIO DIARIO</IonCol></IonRow>
                            <IonCard mode='ios' className='ion-card-margin'>
                                <IonCardHeader className='ion-card-header'>
                                    <IonRow>
                                        <IonCol className="ion-col-red">
                                            Meta
                                        </IonCol>
                                        <IonCol className="ion-col-yellow">
                                            Alcanzado
                                        </IonCol>
                                    </IonRow>
                                </IonCardHeader>

                                <IonCardContent className='ion-card-content'>
                                    <IonRow>
                                        <IonCol className="ion-col-border-right">
                                            <IonInput itemID='esM' type="number" placeholder="48" min={0} ></IonInput>
                                        </IonCol>
                                        <IonCol className="ion-col-border-left">
                                            <IonInput itemID='esA' type="number" placeholder="0" min={0} ></IonInput>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="6" >
                            <IonRow><IonCol className='ion-col-text-alingn color-purple'>OFRENDA 13ER. SABADO</IonCol></IonRow>
                            <IonCard mode='ios' className='ion-card-margin'>
                                <IonCardHeader className='ion-card-header'>
                                    <IonRow>
                                        <IonCol className="ion-col-red">
                                            Meta
                                        </IonCol>
                                        <IonCol className="ion-col-yellow">
                                            Alcanzado
                                        </IonCol>
                                    </IonRow>
                                </IonCardHeader>

                                <IonCardContent className='ion-card-content'>
                                    <IonRow>
                                        <IonCol className="ion-col-border-right">
                                            <IonInput itemID='oM' type="number" placeholder="500" min={0}></IonInput>
                                        </IonCol>
                                        <IonCol className="ion-col-border-left">
                                            <IonInput itemID='oA' type="number" placeholder="0" min={0}></IonInput>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="6" >
                            <IonRow><IonCol className='ion-col-text-alingn color-blue'>Nº DE VISITAS EN LA REUNION SEMANAL</IonCol></IonRow>
                            <IonCard mode='ios' className='ion-card-margin'>
                                <IonCardHeader className='ion-card-header'>
                                    <IonRow>
                                        <IonCol className="ion-col-red">
                                            Meta
                                        </IonCol>
                                        <IonCol className="ion-col-yellow">
                                            Alcanzado
                                        </IonCol>
                                    </IonRow>
                                </IonCardHeader>

                                <IonCardContent className='ion-card-content'>
                                    <IonRow>
                                        <IonCol className="ion-col-border-right">
                                            <IonInput itemID='vM' type="number" placeholder="11" min={0}></IonInput>
                                        </IonCol>
                                        <IonCol className="ion-col-border-left">
                                            <IonInput itemID='vA' type="number" placeholder="0" min={0}></IonInput>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="6">
                            <IonRow><IonCol className='ion-col-text-alingn color-purple'>PAREJAS MISIONERAS ACTIVAS</IonCol></IonRow>
                            <IonCard mode='ios' className='ion-card-margin'>
                                <IonCardHeader className='ion-card-header'>
                                    <IonRow>
                                        <IonCol className="ion-col-red">
                                            Meta
                                        </IonCol>
                                        <IonCol className="ion-col-yellow">
                                            Alcanzado
                                        </IonCol>
                                    </IonRow>
                                </IonCardHeader>

                                <IonCardContent className='ion-card-content'>
                                    <IonRow>
                                        <IonCol className="ion-col-border-right">
                                            <IonInput itemID='pmM' type="number" placeholder="2" min={0}></IonInput>
                                        </IonCol>
                                        <IonCol className="ion-col-border-left">
                                            <IonInput itemID='pmA' type="number" placeholder="0" min={0}></IonInput>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid fixed>
                    <IonRow>
                        <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="6" >
                            <IonRow><IonCol className='ion-col-text-alingn'>Nº DE PERSONAS A BAUTIZAR</IonCol></IonRow>
                            <IonCard mode='ios' className='ion-card-margin'>
                                <IonCardHeader className='ion-card-header'>
                                    <IonRow>
                                        <IonCol className="ion-col-red">
                                            Meta
                                        </IonCol>
                                        <IonCol className="ion-col-yellow">
                                            Alcanzado
                                        </IonCol>
                                    </IonRow>
                                </IonCardHeader>

                                <IonCardContent className='ion-card-content'>
                                    <IonRow>
                                        <IonCol className="ion-col-border-right">
                                            <IonInput itemID='nPBM' type="number" placeholder="1" min={0}></IonInput>
                                        </IonCol>
                                        <IonCol className="ion-col-border-left">
                                            <IonInput itemID='nPBA' type="number" placeholder="0" min={0}></IonInput>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="6" >
                            <IonRow><IonCol className='ion-col-text-alingn'>Nº DE ESTUDIOS BIBLICOS</IonCol></IonRow>
                            <IonCard mode='ios' className='ion-card-margin'>
                                <IonCardHeader className='ion-card-header'>
                                    <IonRow>
                                        <IonCol className="ion-col-red">
                                            Meta
                                        </IonCol>
                                        <IonCol className="ion-col-yellow">
                                            Alcanzado
                                        </IonCol>
                                    </IonRow>
                                </IonCardHeader>

                                <IonCardContent className='ion-card-content'>
                                    <IonRow>
                                        <IonCol className="ion-col-border-right">
                                            <IonInput itemID='nEBM' type="number" placeholder="12" min={0}></IonInput>
                                        </IonCol>
                                        <IonCol className="ion-col-border-left">
                                            <IonInput itemID='nEBA' type="number" placeholder="0" min={0}></IonInput>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="6" >
                            <IonRow><IonCol className='ion-col-text-alingn'>Nº DE EX-ADVENTISTAS RESCATADOS</IonCol></IonRow>
                            <IonCard mode='ios' className='ion-card-margin'>
                                <IonCardHeader className='ion-card-header'>
                                    <IonRow>
                                        <IonCol className="ion-col-red">
                                            Meta
                                        </IonCol>
                                        <IonCol className="ion-col-yellow">
                                            Alcanzado
                                        </IonCol>
                                    </IonRow>
                                </IonCardHeader>

                                <IonCardContent className='ion-card-content'>
                                    <IonRow>
                                        <IonCol className="ion-col-border-right">
                                            <IonInput itemID='nERM' type="number" placeholder="1" min={0}></IonInput>
                                        </IonCol>
                                        <IonCol className="ion-col-border-left">
                                            <IonInput itemID='nERA' type="number" placeholder="0" min={0}></IonInput>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default Goal;
