import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal} from "antd";
import EventCalendar from "../components/EventCalendar";
import {Row} from "antd/lib";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {IEvent} from "../models/EventInterfaces";

const Calendar: FC = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const {guests, events} = useSelector((state:RootState) => state.event)
    const {user} = useSelector((state:RootState) => state.auth)
    const {fetchGuests, createEvent, fetchEvents} = useActions()

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username)
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        createEvent(event);
    }

    return (
       <Layout>
           <EventCalendar events={events}/>
           <Row justify={"center"} style={{height: '100px'}}>
               <Button
                   style={{backgroundColor: 'lightblue', height:'100px', width: '200px'}}
                   onClick={() =>  setModalVisible(true)}
               >
                   New Event
               </Button>
           </Row>
           <Modal
               title={'Добавить новое событие'}
               open={modalVisible} footer={null}
               onCancel={() => setModalVisible(false)}
           >
                <EventForm guests={guests} submit={addNewEvent}/>
           </Modal>
       </Layout>
    );
};

export default Calendar;
