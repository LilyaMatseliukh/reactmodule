import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";

const CarForm = ({setTrigger}) => {
    const {register, reset, handleSubmit} = useForm();

    const save = async (car) => {
        await carService.create(car);
        setTrigger(prev => !prev);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                minLength: {value: 1, message: 'min 1 character'},
                maxLength: {value: 20, message: 'max 20 characters'}
            })}/>
            <input type="text" placeholder={'price'} {...register('price', {
                min: {value: 0, message: 'min 0'},
                max: {value: 1_000_000, message: 'max 1000000'}
            })}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export {CarForm};