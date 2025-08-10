import commonAPIs from '@/api/common'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAllSkillsData = createAsyncThunk('common/skills', async (id: string, { dispatch, rejectWithValue }) => {
  const res = await dispatch(commonAPIs.endpoints.getSkills.initiate({ id }))
  if (res.data) {
    return res.data
  } else {
    return rejectWithValue(res.error)
  }
})

export const getAllDepartmentData = createAsyncThunk(
  'common/department',
  async (id: string = '', { dispatch, rejectWithValue }) => {
    const res = await dispatch(commonAPIs.endpoints.getDepartments.initiate({ id }))
    if (res.data) {
      return res.data
    } else {
      return rejectWithValue(res.error)
    }
  },
)

export const getAllEmpTypesData = createAsyncThunk(
  'common/emp-types',
  async (id: string = '', { dispatch, rejectWithValue }) => {
    const res = await dispatch(commonAPIs.endpoints.getEmpTypes.initiate({ id }))
    if (res.data) {
      return res.data
    } else {
      return rejectWithValue(res.error)
    }
  },
)

export const getAllSeniorityLevelsData = createAsyncThunk(
  'common/seniority-levels',
  async (id: string = '', { dispatch, rejectWithValue }) => {
    const res = await dispatch(commonAPIs.endpoints.getSeniorityLevels.initiate({ id }))
    if (res.data) {
      return res.data
    } else {
      return rejectWithValue(res.error)
    }
  },
)
