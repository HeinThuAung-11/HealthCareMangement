import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Controller, useForm} from "react-hook-form";
import {FormControl, OutlinedInput} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useSelector} from "react-redux";
import {apiSaveBooking, getLabTestId} from "../../features/labTestSlice.js";
import {useAppDispatch} from "../../app/hooks.js";
import {useNavigate} from "react-router-dom";

const steps = ['Insert Patient Detail', 'Select Patient Address', 'Select Time Slot'];

export const Booking = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const {control, register, handleSubmit, formState: {errors}, setValue}
        = useForm({
        mode: "onTouched",
    })
    const [startDate, setStartDate] = useState(new Date());
    const [selectDate, setSelectDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("")
    const labTestId = useSelector(getLabTestId)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    // Submit your data into Redux store
    const onSubmit = async (data) => {
        let userData = {
            ...data,
            dateOfBirth: startDate,
            selectedTime,
            selectDate,
            labTestId
        }
        console.log(userData)
        await dispatch(apiSaveBooking(userData))
        navigate('/')

    }
    const afternoon = ['12:00PM', '12:30PM', '01:00PM', '01:30PM', '02:00PM', '02:30PM']
    const evening = ['03:00PM', '03:30PM', '04:00PM', '04:30PM', '05:00PM', '05:30PM']
    return (
        <Box sx={{width: '100%'}} className={"px-72 py-10"}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{mt: 2, mb: 1}}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                        <Box sx={{flex: '1 1 auto'}}/>
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {activeStep === 0 ?
                            <>
                                <h1 className={"text-2xl font-semibold my-5"}>Add Patient
                                    Details</h1>
                                <div className={"flex flex-col items-center my-5"}>
                                    <FormControl sx={{width: '50ch'}} variant="outlined">
                                        <h3 className={"text-lg my-3"}>Patient's Name</h3>
                                        <OutlinedInput
                                            id="outlined-adornment-weight"
                                            {...register("name", {})}
                                            aria-describedby="outlined-weight-helper-text"
                                            inputProps={{
                                                'aria-label': 'name',
                                            }}
                                            placeholder={"Enter Paient's Name"}
                                        />
                                    </FormControl>
                                    <FormControl sx={{width: '50ch'}} variant="outlined">
                                        <h3 className={"text-lg my-3"}>Date of Birth</h3>

                                        <Controller
                                            name="dateOfBirth"
                                            control={control}
                                            render={() => (
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    showYearDropdown
                                                    dateFormatCalendar="MMMM"
                                                    yearDropdownItemNumber={15}
                                                    scrollableYearDropdown
                                                    className="border border-gray-300 rounded-md p-2"
                                                />
                                            )}
                                        />
                                    </FormControl>
                                    <FormControl sx={{width: '50ch'}} variant="outlined">
                                        <h3 className={"text-lg my-3"}>Gender</h3>
                                        <Controller
                                            name="gender"
                                            control={control}
                                            defaultValue=""
                                            render={({field}) => (
                                                <div className={"flex items-center justify-evenly"}>
                                                    <input {...field} type="radio" value="Male" id="male"/>
                                                    <label htmlFor="male">Male</label>
                                                    <input {...field} type="radio" value="Female" id="female"/>
                                                    <label htmlFor="female">Female</label>
                                                    <input {...field} type="radio" value="Other" id="other"/>
                                                    <label htmlFor="other">Other</label>
                                                </div>
                                            )}
                                        />
                                    </FormControl>
                                    <FormControl sx={{width: '50ch'}} variant="outlined">
                                        <h3 className={"text-lg my-3"}>Mobile's Number (OTP will be sent to this
                                            number)</h3>
                                        <OutlinedInput
                                            id="outlined-adornment-weight"
                                            {...register("phoneNumber", {})}
                                            aria-describedby="outlined-weight-helper-text"
                                            inputProps={{
                                                'aria-label': 'phoneNumber',
                                            }}
                                            placeholder={"Enter Mobile's Number"}
                                        />
                                    </FormControl>
                                    <FormControl sx={{width: '50ch'}} variant="outlined">
                                        <h3 className={"text-lg my-3"}>Email Address</h3>
                                        <OutlinedInput
                                            id="outlined-adornment-weight"
                                            {...register("emailAddress", {})}
                                            aria-describedby="outlined-weight-helper-text"
                                            inputProps={{
                                                'aria-label': 'emailAddress',
                                            }}
                                            type="email"
                                            placeholder={"Enter Email Address"}
                                        />
                                    </FormControl>
                                </div>
                            </>
                            :

                            activeStep === 1 ?
                                <>
                                    <h1 className={"text-2xl font-semibold my-5"}>Add Patient
                                        Details</h1>
                                    <div className={"flex flex-col items-center my-5"}>
                                        <FormControl sx={{width: '50ch'}} variant="outlined">
                                            <h3 className="text-lg my-3">Street Address</h3>
                                            <Controller
                                                name="streetAddress"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => (
                                                    <OutlinedInput
                                                        {...field}
                                                        placeholder="Street Address"
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl sx={{width: '50ch'}} variant="outlined">
                                            <h3 className="text-lg my-3">City</h3>
                                            <Controller
                                                name="city"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => (
                                                    <OutlinedInput
                                                        {...field}
                                                        placeholder="City"
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl sx={{width: '50ch'}} variant="outlined">
                                            <h3 className="text-lg my-3">State</h3>
                                            <Controller
                                                name="state"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => (
                                                    <OutlinedInput
                                                        {...field}
                                                        placeholder="State"
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl sx={{width: '50ch'}} variant="outlined">
                                            <h3 className="text-lg my-3">Postal Code</h3>
                                            <Controller
                                                name="postalCode"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => (
                                                    <OutlinedInput
                                                        {...field}
                                                        placeholder="Postal Code"
                                                    />
                                                )}
                                            />
                                        </FormControl>

                                        <FormControl sx={{width: '50ch'}} variant="outlined">
                                            <h3 className="text-lg my-3">Country</h3>
                                            <Controller
                                                name="country"
                                                control={control}
                                                defaultValue=""
                                                render={({field}) => (
                                                    <OutlinedInput
                                                        {...field}
                                                        placeholder="Country"
                                                    />
                                                )}
                                            />
                                        </FormControl>
                                    </div>
                                </>
                                :
                                <>
                                    <h1 className={"text-2xl font-semibold my-5"}>Select Time Slot</h1>
                                    <FormControl sx={{width: '50ch'}} variant="outlined">
                                        <h3 className={"text-lg my-3"}>Select Your Date</h3>

                                        <DatePicker
                                            selected={selectDate}
                                            onChange={(date) => setSelectDate(date)}
                                            showYearDropdown
                                            dateFormatCalendar="MMMM"
                                            yearDropdownItemNumber={15}
                                            scrollableYearDropdown
                                            className="border border-gray-300 rounded-md p-2"
                                        />
                                    </FormControl>
                                    <h3 className={"text-lg my-3"}>Select Your Time</h3>
                                    <h3 className={"text-md my-3"}>Afternoon</h3>
                                    <div className={"flex justify-evenly"}>
                                        {afternoon.map(time => {
                                            return <div
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`cursor-pointer border rounded-md w-[120px] h-[40px] flex items-center justify-center 
                                                ${time === selectedTime ? 'bg-emerald-500 text-white' : 'border-emerald-500 text-emerald-500'}`}>
                                                {time}
                                            </div>
                                        })
                                        }

                                    </div>
                                    <h3 className={"text-md my-3"}>Evening</h3>
                                    <div className={"flex justify-evenly"}>
                                        {evening.map(time => {
                                            return <div
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`cursor-pointer border rounded-md w-[120px] h-[40px]  flex items-center justify-center  
                                                ${time === selectedTime ? 'bg-emerald-500 text-white' : 'border-emerald-500 text-emerald-500'}`}>
                                                {time}
                                            </div>
                                        })
                                        }

                                    </div>

                                </>
                        }
                        <Box sx={{display: 'flex', flexDirection: 'row', pt: 2, my: 3}}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{mr: 1}}
                            >
                                Back
                            </Button>
                            <Box sx={{flex: '1 1 auto'}}/>

                            <Button onClick={(e) => {
                                e.preventDefault(); // Prevent the default form submission
                                if (activeStep === steps.length - 1) {
                                    handleSubmit(onSubmit)();
                                } else {
                                    handleNext(); // Otherwise, proceed to the next step
                                }
                            }}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </form>
                </React.Fragment>
            )}
        </Box>
    );
}