import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";

interface EventFormProps {
    guests: IUser[]
}

const EventForm: FC<EventFormProps> = ({guests}) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent)
    // const submit = () => {
    //     login(username, password)
    // }

    return (
        <Form

        >
            <Form.Item
                label="Description event"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    value={event.description}
                    onChange={(e) => setEvent({...event, description: e.target.value})}
                />
            </Form.Item>
            <Form.Item
                label="Date event"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker

                />
            </Form.Item>
            <Form.Item
                label='Select a guest'
                name='guest'
                rules={[rules.required()]}
            >
                <Select onChange={(guest: string) => setEvent({...event, guest})}>
                    {guests.map(quest =>
                        <Select.Option
                            key={quest.username}
                            value={quest.username}
                        >
                            {quest.username}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify='end'>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;