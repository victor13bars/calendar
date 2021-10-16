import React, {FC, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false)
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
                <EventForm/>
            </Modal>
        </Layout>
    );
};

export default Event;