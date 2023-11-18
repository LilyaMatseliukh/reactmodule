import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../services/carService";
import {carValidator} from "../validators/carValidator";

const CarForm = ({setTrigger, carForUpdate}) => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue, getValues} = useForm({
        mode: 'onSubmit',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})

            carService.updateById(carForUpdate.id, carForUpdate)
        }

    }, [carForUpdate])

    const save = async (car) => {
        console.log(car);
        await carService.create(car);
        setTrigger(prev => !prev);
        reset();
    }

    return (
        <>
            {/*<form onSubmit={handleSubmit(save)}>*/}
            {/*    <input type="text" placeholder={'brand'} {...register('brand', {*/}
            {/*        // minLength: {value: 1, message: 'min 1 character'},*/}
            {/*        // maxLength: {value: 20, message: 'max 20 characters'}*/}
            {/*        pattern: {value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message: 'Only letters, min 1 max 20 characters'}*/}
            {/*    })}/>*/}
            {/*    <input type="text" placeholder={'price'} {...register('price', {*/}
            {/*        min: {value: 0, message: 'min 0'},*/}
            {/*        max: {value: 1_000_000, message: 'max 1000000'},*/}
            {/*        valueAsNumber: true*/}
            {/*    })}/>*/}
            {/*    <input type="text" placeholder={'year'} {...register('year', {*/}
            {/*        min: {value: 1990, message: 'min 1990'},*/}
            {/*        max: {value: new Date().getFullYear(), message: 'max current year'},*/}
            {/*        valueAsNumber: true*/}
            {/*    })}/>*/}
            {/*    <button disabled={!isValid}>save</button>*/}
            {/*</form>*/}

            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                {/*<button disabled={!isValid}>save</button>*/}
                <button>save</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};