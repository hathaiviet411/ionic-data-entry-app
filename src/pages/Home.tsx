import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonDatetime,
  IonRadioGroup,
  IonRadio,
  IonTextarea,
  IonButton,
  IonToast,
} from '@ionic/react';
import { throws } from 'assert';
import { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [dateOfAddedProperty, setDateOfAddedProperty] = useState('');
  const [monthlyRentPrice, setMonthlyRentPrice] = useState('');
  const [furnitureTypes, setFurnitureTypes] = useState('');
  const [notes, setNotes] = useState('');
  const [nameReporter, setNameReporter] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [headerMessage, setHeaderMessage] = useState('');
  const [message, setMessage] = useState('');
  const [colorMessage, setColorMessage] = useState('');

  const handleSubmit = () => {
    const Form = {
      propertyType,
      bedrooms,
      dateOfAddedProperty: dateOfAddedProperty,
      monthlyRentPrice,
      furnitureTypes,
      notes,
      nameReporter,
    };

    if (Form.propertyType.length === 0) {
      setHeaderMessage('Warning');
      setMessage('Property Type is required !');
      setColorMessage('danger');
      setShowToast(true);

      setTimeout(()=>{
        setShowToast(false);
      }, 3000)
    } else if (Form.bedrooms.length === 0) {
      setHeaderMessage('Warning');
      setMessage('Bedrooms is required !');
      setColorMessage('danger');
      setShowToast(true);

      setTimeout(()=>{
        setShowToast(false);
      }, 3000)
    } else if (Form.dateOfAddedProperty.length === 0) {
      setHeaderMessage('Warning');
      setMessage('Date of the added property is required !');
      setColorMessage('danger');
      setShowToast(true);

      setTimeout(()=>{
        setShowToast(false);
      }, 3000)
    } else if (Form.monthlyRentPrice.length === 0) {
      setHeaderMessage('Warning');
      setMessage('Monthly rent price is required !');
      setColorMessage('danger');
      setShowToast(true);

      setTimeout(()=>{
        setShowToast(false);
      }, 3000)
    } else if (Form.furnitureTypes.length === 0) {
      setHeaderMessage('Warning');
      setMessage('Furniture types is required !');
      setColorMessage('danger');
      setShowToast(true);

      setTimeout(()=>{
        setShowToast(false);
      }, 3000)
    } else if (Form.notes.length === 0) {
      setHeaderMessage('Warning');
      setMessage('Notes are required !');
      setColorMessage('danger');
      setShowToast(true);

      setTimeout(()=>{
        setShowToast(false);
      }, 3000)
    } else if (Form.nameReporter.length === 0) {
      setHeaderMessage('Warning');
      setMessage(`Reporter's name is required !`);
      setColorMessage('danger');
      setShowToast(true);

      setTimeout(()=>{
        setShowToast(false);
      }, 3000)
    } else {
      setHeaderMessage('Success');
      setMessage('Form Submitted Successfully.');
      setColorMessage('success');
      setShowToast(true);

      setTimeout(()=>{
        setShowToast(false);
      }, 3000)  
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>⭐ Data Validation App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          {/* Property Type */}
          <IonItem>
            <IonLabel position="stacked">🗃 Property Type</IonLabel>
            <IonSelect 
              value={propertyType} 
              onIonChange={event => setPropertyType(event.detail.value)} 
              placeholder="Please Select Property Type."
            >
              <IonSelectOption value="Flat">Flat</IonSelectOption>
              <IonSelectOption value="House">House</IonSelectOption>
              <IonSelectOption value="Bungalow">Bungalow</IonSelectOption>
            </IonSelect>
          </IonItem>

          {/* Number of The Bedrooms */}
          <IonItem>
            <IonLabel position="stacked">🛌 Bedrooms</IonLabel>
            <IonInput 
              type="number"
              onIonChange={event => setBedrooms(event.detail.value!)} 
              placeholder="Please Enter The Number of The Bedrooms."
            ></IonInput>
          </IonItem>

          {/* Date of The Added Property */}
          <IonItem>
            <IonLabel position="stacked">📅 Date</IonLabel>
            <IonDatetime 
              onIonChange={event => setDateOfAddedProperty(event.detail.value!)} 
              display-format="YYYY/MM/DD" 
              placeholder="Please Select The Date of The Added Property."
            ></IonDatetime>
          </IonItem>

          {/* Monthly Rent Price */}
          <IonItem>
            <IonLabel position="stacked">💰 Monthly Rent Price</IonLabel>
            <IonInput 
              type="number"
              onIonChange={event => setMonthlyRentPrice(event.detail.value!)} 
              placeholder="Please Enter Monthly Rent Price."
            ></IonInput>
          </IonItem>

          {/* Furniture Types */}
          <IonItem>
            <IonLabel position="stacked">🚪 Furniture Types</IonLabel>
            <IonRadioGroup onIonChange={e => setFurnitureTypes(e.detail.value)}>
              <IonItem>
                <IonLabel><small>Furnished</small></IonLabel>
                <IonRadio 
                  slot="start" 
                  value="Furnished"
                ></IonRadio>
              </IonItem>
              <IonItem>
                <IonLabel><small>Unfurnished</small></IonLabel>
                <IonRadio 
                  slot="start" 
                  value="Unfurnished"
                ></IonRadio>
              </IonItem>
              <IonItem>
                <IonLabel><small>Part Furnished</small></IonLabel>
                <IonRadio 
                  slot="start" 
                  value="PartFurnished"
                ></IonRadio>
              </IonItem>
            </IonRadioGroup>
          </IonItem>

          {/* Notes */}
          <IonItem>
            <IonLabel position="stacked">📝 Notes</IonLabel>
            <IonTextarea
              onIonChange={event => setNotes(event.detail.value!)}
              placeholder="Please Enter Notes"
            >
            </IonTextarea>
          </IonItem>

          {/* Name of The Reporter */}
          <IonItem>
            <IonLabel position="stacked">🔖Name of the reporter</IonLabel>
            <IonInput 
              onIonChange={event => setNameReporter(event.detail.value!)} 
              placeholder="Please Enter Name of The Reporter"
            ></IonInput>
          </IonItem>

          {/* Button Submit */}
          <IonButton color="success" expand="block" onClick={handleSubmit}>
            🗃 Submit
          </IonButton>

          {/* Button Reset */}
          {/* <IonButton color="danger" expand="block" onClick={handleResetData}>
            🧼️ Reset
          </IonButton> */}

          {/* Toast */}
          <IonToast isOpen={showToast} header={headerMessage} message={message} color={colorMessage} position="top"></IonToast>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
