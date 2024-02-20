import {
  Home,
  Register,
  Login,
  NotFound,
  TicketEvent,
  MeetingEvent,
  GetTogetherEvent,
  OtherEvent,
  Events,
  EditEvent,
  CreateEvent,
  AddGuests,
  ViewGuests,
  Guest,
  EditGuestPage,
} from "../pages";

export const appRoutes = [
  {
    to: "/",
    element: Home,
  },
  {
    to: "/register",
    element: Register,
  },
  {
    to: "/create-event",
    element: CreateEvent,
  },
  {
    to: "/add-guests/:eventId",
    element: AddGuests,
  },
  {
    to: "/view-guests/:eventTitle/:eventId",
    element: ViewGuests,
  },
  {
    to: "/guest/:invitationId",
    element: Guest,
  },
  {
    to: "/edit-guest/:id",
    element: EditGuestPage,
  },
  {
    to: "/events",
    element: Events,
  },
  {
    to: "/edit-event/:id",
    element: EditEvent,
  },
  {
    to: "/ticket-event",
    element: TicketEvent,
  },
  {
    to: "/get-together-event",
    element: GetTogetherEvent,
  },
  {
    to: "/meeting-event",
    element: MeetingEvent,
  },
  {
    to: "/other-event",
    element: OtherEvent,
  },
  {
    to: "/login",
    element: Login,
  },
  {
    to: "*",
    element: NotFound,
  },
];
