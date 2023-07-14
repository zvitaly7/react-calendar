import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Select} from "antd";
import FormItem from "antd/es/form/FormItem";
import {User} from "../store/reducers/auth";
import {IEvent} from "../models/EventInterfaces";
import {Dayjs} from 'dayjs';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {formatDate} from "../utils";

interface EventFormProps {
    guests: User[],
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
    const {user} = useSelector((state:RootState) => state.auth)
    const [event, setEvent] = useState<IEvent>({
        author: '', date: '', description: '', guest: ''
    })

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }


    const setDate = (date: Dayjs | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date)})
        }
    }

    return (
        <Form onFinish={submitForm}>
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
                name={'date'}
                rules={[{ required: true, message:'Pick Date'}]}
            >
                <DatePicker onChange={(date) => setDate(date)} style={{margin: '0 50px 0'}}/>
            </FormItem>
            <FormItem rules={[{ required: true, message:'Pick User'}]}>
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
