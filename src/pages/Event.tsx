import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedselector";

const Event: FC = () => {
    const {fetchGuests} = useActions()
    const [modalVisible, setModalVisible] = useState(false)
    const {guests} = useTypedSelector(state => state.event)

    useEffect(() => {
        fetchGuests()
    }, [])
    return (
        <Layout>
            <EventCalendar event={[]}/>
            <Row justify='center'>
                <Button
                    type="primary"
                    onClick={() => setModalVisible(true)}
                >
                    Add Event
                </Button>
            </Row>
            <Modal
                title='Add Event'
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm guests={guests}/>
            </Modal>
        </Layout>
    );
};

export default Event;