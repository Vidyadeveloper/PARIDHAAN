const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class InStoreAppointmentBookingCase extends BlazeCase {
  constructor() {
    super(
      "in-store-appointment-booking",
      "In-store Appointment Booking",
      [
{
      id: "Booking",
      label: "Booking",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "in-store-appointment-booking-booking-start",
          dataModelReference: { models: [] }
        },
{
          id: "appt.book.request",
          label: "Create booking request",
          type: "manual",
          status: "pending",
          view: "in-store-appointment-booking-booking-create-booking-request",
          dataModelReference: { models: ["appointmentId", "customerIdRef", "serviceType", "appointmentDate"] },
          routingConfig:           {
            "routeTo": "TaskQueue",
            "taskQueue": {
              "id": "mgrquue"
            }
          }
        },
{
          id: "appt.book.confirm",
          label: "Confirm slot & assign staff",
          type: "manual",
          status: "pending",
          view: "in-store-appointment-booking-booking-confirm-slot-&-assign-staff",
          dataModelReference: { models: ["appointmentId", "staffIdRef", "status"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "in-store-appointment-booking-booking-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Appointment",
      label: "Appointment",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "in-store-appointment-booking-appointment-start",
          dataModelReference: { models: [] }
        },
{
          id: "appt.hold.prepare",
          label: "Preparation & notes",
          type: "manual",
          status: "pending",
          view: "in-store-appointment-booking-appointment-preparation-&-notes",
          dataModelReference: { models: ["appointmentId", "notes", "customerIdRef"] }
        },
{
          id: "appt.hold.complete",
          label: "Complete appointment & next steps",
          type: "manual",
          status: "pending",
          view: "in-store-appointment-booking-appointment-complete-appointment-&-next-steps",
          dataModelReference: { models: ["appointmentId", "status", "staffIdRef"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "in-store-appointment-booking-appointment-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Follow-up",
      label: "Follow-up",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "in-store-appointment-booking-follow-up-start",
          dataModelReference: { models: [] }
        },
{
          id: "appt.follow.followup",
          label: "Follow-up communication",
          type: "manual",
          status: "pending",
          view: "in-store-appointment-booking-follow-up-follow-up-communication",
          dataModelReference: { models: ["appointmentId", "customerIdRef", "notes"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "in-store-appointment-booking-follow-up-end",
          dataModelReference: { models: [] }
        }
      ]
    }
      ]
    );
  }
}

module.exports = new InStoreAppointmentBookingCase();