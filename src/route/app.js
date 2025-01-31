import {
  Home,
  Register,
  Login,
  NotFound,
  TicketEvent,
  MeetingEvent,
  GetTogetherEvent,
  OtherEvent,
  weddingevent,
  Events,
  EditEvent,
  CreateEvent,
  AddGuests,
  ViewGuests,
  Guest,
  ViewTicket,
  EditGuestPage,
  TicketPurchase,
  UserBuyTicket,
  Privacy,
  DeleteAccount,
} from "../pages";

export const appRoutes = [
  {
    to: "/",
    element: Home,
  },
  {
    to: "/privacy",
    element: Privacy,
  },
  {
    to: "/delete-account",
    element: DeleteAccount,
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
    to: "/view-ticket/:eventId/:userInviteId/:td",
    element: ViewTicket,
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
    to: "/ticket-purchase/:id/:eventTitle/:userEmail",
    element: TicketPurchase,
  },
  {
    to: "/buy-ticket/:id/:eventTitle/:userId",
    element: UserBuyTicket,
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
    to: "/wedding-event",
    element: weddingevent,
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
