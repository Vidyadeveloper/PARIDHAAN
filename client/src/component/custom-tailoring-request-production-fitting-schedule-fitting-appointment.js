
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class CustomTailoringRequestProductionFittingScheduleFittingAppointment extends DynamicHtmlElement {
   constructor() {
    super();
  }


  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-data" context="data"></blaze-field-group>
      
    `;

    
      const fgdata = this.shadowRoot.getElementById("fg-data");
      fgdata.context = "data";
      fgdata.model = {};
      
    
          // 1️⃣ Render fields immediately with default labels
    fgdata.fields = [{"id":"appointmentId","name":"Appointment ID","type":"text","required":false,"description":"Unique identifier for the appointment.","label":"Appointment ID"},{"id":"staffIdRef","name":"Staff reference","type":"text","required":false,"description":"Assigned stylist / tailor.","label":"Staff reference"},{"id":"appointmentDate","name":"Appointment date","type":"date","required":false,"description":"Scheduled date and time.","label":"Appointment date"},{"id":"notes","name":"Notes","type":"text","required":false,"description":"Preparation notes or special requests.","label":"Notes"}];

    // 2️⃣ Apply translations later (if available)
    this.updateFieldLabels();
      
      fgdata.data = { "data": this._formData.data || {} };
   

  }

  populateForm() {
    
    const fgdata = this.shadowRoot?.getElementById("fg-data");
    if (fgdata) {
      fgdata.data = { "data": this._formData["data"] || {} };
    }
  
  }
}

customElements.define("custom-tailoring-request-production-fitting-schedule-fitting-appointment", CustomTailoringRequestProductionFittingScheduleFittingAppointment);
export default CustomTailoringRequestProductionFittingScheduleFittingAppointment;
