import { IonCard, IonCardContent, IonCardHeader, IonCol, IonInput } from '@ionic/react';

function Mycard() {
    const array = Array(4).fill(3);
    return (
        <div className="row">
          {array.map((item, index) => (
            <IonCol key={index} size="12" sizeXs='12' sizeSm='6' sizeMd='4' sizeLg='3'> Estudio Diario
              <IonCard>
                <IonCardHeader color="primary">Meta</IonCardHeader>
                <IonCardContent>
                  <IonInput value={0} type="text"></IonInput>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </div>
      );
    };
    export default Mycard;