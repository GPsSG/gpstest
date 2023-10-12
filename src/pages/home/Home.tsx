import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Home.css';
import CardDinamico from '../../components/CardDinamico';
import { helpCircle, logoFirebase, personCircle, warning } from 'ionicons/icons';
import { useState, useSyncExternalStore } from 'react';


const Home: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    /* const [inputValue, setInputValue] = useState('');

    const handleChange = (event: { target: { value: any; }; }) => {
        alert("test");
        const regex = /^[0-9]+$/;
        const inputValue = event.target.value;
        if (regex.test(inputValue)) {
          setInputValue(inputValue);
        } else {
          setInputValue('');
        }
      };
      value={inputValue} onChange={handleChange}
 */

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar mode='ios'>
                    <IonButtons collapse={true} slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-header2 ion-title2'> METAS TRIMESTRALES DEL GP</IonTitle>
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
                            <IonTitle className='ion-header ion-title'><div> <span className='ion-header ion-title span' >M</span>ETAS <span className='ion-header ion-title span'>T</span>RIMESTRALES DEL <span className='ion-header ion-title span'>GP</span> </div> </IonTitle>
                        </IonItem>
                    </IonToolbar>
                </IonHeader>

                <IonGrid fixed>
                    <IonRow>
                        <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="6">
                            <IonRow><IonCol  className='ion-col-text-alingn color-blue'>ESTUDIO DIARIO</IonCol></IonRow>
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
                                            <IonInput itemID='esM' type="number" placeholder="0" min={0} ></IonInput>
                                        </IonCol>
                                        <IonCol className="ion-col-border-left">
                                            <IonInput itemID='esA' type="number" placeholder="0"  min={0} ></IonInput>
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
                                            <IonInput itemID='oM' type="number" placeholder="0" min={0}></IonInput>
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
                                            <IonInput itemID='vM' type="number" placeholder="0" min={0}></IonInput>
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
                                            <IonInput itemID='pmM' type="number" placeholder="0" min={0}></IonInput>
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
                                            <IonInput itemID='nPBM' type="number" placeholder="0" min={0}></IonInput>
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
                                            <IonInput itemID='nEBM' type="number" placeholder="0" min={0}></IonInput>
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
                                            <IonInput itemID='nERM' type="number" placeholder="0" min={0}></IonInput>
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

export default Home;
