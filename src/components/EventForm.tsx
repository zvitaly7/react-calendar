import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Select} from "antd";
import FormItem from "antd/es/form/FormItem";
import {User} from "../store/reducers/auth";
import {IEvent} from "../models/EventInterfaces";

interface EventFormProps {
    guests: User[]
}
const EventForm: FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author: '', date: '', description: '', guest: ''
    })


    return (
        <Form>
            <Form.Item
                label={'Event Description'}
                name={'description'}
                rules={[{ required: true, message:'Enter Description'}]}
            >
                <Input onChange={e => setEvent({...event, description: e.target.value})}
                       value={event.description} style={{height: '200px'}}/>
            </Form.Item>
            <FormItem
                label={'Event Date'}
                name={'date'}>
                <DatePicker onChange=style={{margin: '0 50px 0'}}/>
            </FormItem>
            <FormItem>
                <Select style={{width: 120}} onChange={(guest:string) => setEvent({...event, guest})}>
                    {props.guests.map(guest =>
                        <Select.Option key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>
                    )}
                </Select>
            </FormItem>
            <FormItem>
                <Button type={'primary'} htmlType={'submit'}>
                    Add
                </Button>
            </FormItem>
        </Form>
    );
};

export default EventForm;
