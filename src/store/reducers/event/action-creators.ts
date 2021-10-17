import {EventActionEnum, SetEventsAction, SetGuestsAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";
import {IEvent} from "../../../models/IEvent";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
    setGuests: (guests: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload: guests}),
    setEvents: (events: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload: events}),

    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService._getUsers()
            dispatch(EventActionCreators.setGuests(response.data))
        } catch (e) {
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(event)
            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem('events', JSON.stringify(json))
        } catch (e) {

        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch (e) {
            console.log(e)
        }
    }
}