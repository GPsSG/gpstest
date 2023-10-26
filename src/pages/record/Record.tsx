import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import '../home/Home.css';

import { helpCircle, logoFirebase, personCircle, warning } from 'ionicons/icons';
import { useState, useSyncExternalStore } from 'react';


const Record: React.FC = () => {

    const { name } = useParams<{ name: string; }>();

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar mode='ios'>
                    <IonButtons collapse={true} slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-header2 ion-title2'> REGISTRO DE ACTIVIDAD MISIONERA</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen={true}>

                <IonHeader collapse="condense" className='ion-header ion-header-responsive'>
                    <IonToolbar className='ion-toolbar ion-toolbar-responsive'>
                        <IonButtons collapse={true} slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonItem className="item-bottom">
                            <IonTitle className='ion-header ion-title'>
                                <div>
                                    <span className='ion-header ion-title span' >R</span>EGISTRO DE
                                    <span className='ion-header ion-title span'>A</span>CTIVIDAD
                                    <span className='ion-header ion-title span'>M</span>ISIONERA
                                </div>
                            </IonTitle>
                        </IonItem>
                    </IonToolbar>
                </IonHeader>

                <IonGrid fixed>
                    <IonRow>
                        <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12" >

                        </IonCol>
                    </IonRow>

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

export default Record;
