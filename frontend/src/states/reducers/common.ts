import { createSlice } from '@reduxjs/toolkit'

import { getAllDepartmentData, getAllSeniorityLevelsData, getAllSkillsData } from '../actions'
import { commonInitialState } from '../constants/common'

const commonSlice = createSlice({
  name: 'common',
  initialState: commonInitialState,
  reducers: {},
  extraReducers: builder => {
    // skills
    builder.addCase(getAllSkillsData.pending, state => {
      state.skills.data = []
      state.skills.data = commonInitialState.skills.data
      state.skills.isLoading = true
    })
    builder.addCase(getAllSkillsData.fulfilled, (state, action) => {
      state.skills.data = action.payload.data
      state.skills.isLoading = false
    })
    builder.addCase(getAllSkillsData.rejected, state => {
      state.skills.data = commonInitialState.skills.data
      state.skills.isLoading = false
    })
    // departments
    builder.addCase(getAllDepartmentData.pending, state => {
      state.departments.data = []
      state.departments.data = commonInitialState.departments.data
      state.departments.isLoading = true
    })
    builder.addCase(getAllDepartmentData.fulfilled, (state, action) => {
      state.departments.data = action.payload.data
      state.departments.isLoading = false
    })
    builder.addCase(getAllDepartmentData.rejected, state => {
      state.departments.data = commonInitialState.departments.data
      state.departments.isLoading = false
    })
    // seniority levels
    builder.addCase(getAllSeniorityLevelsData.pending, state => {
      state.seniorityLevels.data = []
      state.seniorityLevels.data = commonInitialState.seniorityLevels.data
      state.seniorityLevels.isLoading = true
    })
    builder.addCase(getAllSeniorityLevelsData.fulfilled, (state, action) => {
      state.seniorityLevels.data = action.payload.data
      state.seniorityLevels.isLoading = false
    })
    builder.addCase(getAllSeniorityLevelsData.rejected, state => {
      state.seniorityLevels.data = commonInitialState.seniorityLevels.data
      state.seniorityLevels.isLoading = false
    })
  },
})

export const {} = commonSlice.actions
export default commonSlice.reducer
