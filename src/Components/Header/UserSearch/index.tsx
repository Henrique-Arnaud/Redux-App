import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import githubApi from '../../../Services/githubService'
import { addUserToHistory } from '../../../store/modules/history/actions'
import { Button } from '../../../UI/Button/style'
import { Input } from '../../../UI/Input/style'
import { Container } from './style'

interface FormProps{
  username: string;
}

export const UserSearch = () => {
  // dispatch é uma função
  const dispatch = useDispatch();
  const {handleSubmit, register, formState: {errors}} = useForm<FormProps>({
    defaultValues: {
      username: ''
    }
  });

  const onSubmit = async(data: FormProps) =>{
    try{
      const response = await githubApi.get(`/${data.username}`);
      dispatch(addUserToHistory(response.data));
    }
    catch(error: any){
      alert("Usuário não encontrado");
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Search GitHub Users" {...register("username", {
          required: true,
          pattern: {
           value: /^[A-Za-z\u00C0-\u017F\.\-]+$/i,
           message: ""
          }
        })}/>
        <Button type="submit">
          Search
        </Button>
      </form>
    </Container>
  )
}
