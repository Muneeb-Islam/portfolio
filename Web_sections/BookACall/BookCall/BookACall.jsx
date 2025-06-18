import React, { useEffect, useState } from "react";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import Calendar from "react-calendar";
import { Icon } from "@iconify/react";
import { Autocomplete, FormControl, TextField } from "@mui/material";
import { TimeZones } from "@/utils/constants";
import { _book_a_call } from "@/DAL/Form";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

function BookACall() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [changeNextForm, setChangeNextForm] = useState(false);
  const [timeZoneValue, setTimeZoneValue] = useState("Europe/Dublin");
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
    start_time: "",
    end_time: "",
    date: "",
  });
  console.log(inputs, "inputssss")
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOpenNextForm = () => {
    const formSection = document.getElementById("bookACall");
    if (formSection) {
      const yOffset = -120; // Adjust if your header is taller
      const yPosition = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };



  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null); // clear previous slot coz every date shows new slots
  };

  const handleSubmit = async () => {
    if (!selectedDate || !selectedSlot) {
      enqueueSnackbar("Please select a date and a time slot", {
        variant: "warning",
      });
      return;
    }
    const [start, end] = selectedSlot.split(" - ");
    const start24 = moment(start, "hh:mm A").format("HH:mm");
    const end24 = moment(end, "hh:mm A").format("HH:mm");
    const postData = {
      first_name: inputs.first_name,
      last_name: inputs.last_name,
      email: inputs.email,
      phone_number: inputs.phone_number,
      message: inputs.message,
      time_zone: timeZoneValue,
      date: moment(selectedDate).format("YYYY-MM-DD"),
      start_time: start24,
      end_time: end24,
    };
    console.log(postData, "formData")
    setIsLoading(true);
    const resp = await _book_a_call(postData);
    setIsLoading(false);

    if (resp.code === 200) {
      enqueueSnackbar(resp.message, { variant: "success" });
      router.push("/thank-you");
    } else {
      enqueueSnackbar(resp.message, { variant: "error" });
    }
  };

  useEffect(() => {
    if (!selectedDate) return;
    const generateSlots = () => {
      const slots = [];
      const now = moment();
      const date = moment(selectedDate).startOf("day");
      const isToday = date.isSame(now, "day");
      let startTime = isToday ? now.clone() : date.clone().startOf("day");
      for (let i = 0; i < 24; i++) {
        const start = startTime.clone().add(i, "hours");
        const end = start.clone().add(1, "hour");
        // For today, only allow future slots
        if (!isToday || start.isSameOrAfter(now)) {
          // Prevent crossing into the next day
          if (start.day() === date.day()) {
            slots.push(`${start.format("hh:mm A")} - ${end.format("hh:mm A")}`);
          }
        }
      }
      return slots;
    };
    setTimeSlots(generateSlots());
  }, [selectedDate]);

  return (
    <>
      <section className="book-a-call-wrapper contact_wrapper  mt-3 mt-lg-4">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6 mb-4">
              <h2>
                Book A <span className="font-style"> Call </span>{" "}
              </h2>
              <p>
                Book a call with our team to receive personalized assistance and
                discuss your requirements in detail
              </p>
            </div>
          </div>

          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-12 col-xl-6">
              <div className="calendar-wrapper">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  minDate={new Date()}
                  showNavigation={true}
                  prevLabel={<i className="fas fa-chevron-left"></i>}
                  nextLabel={<i className="fas fa-chevron-right"></i>}
                  tileClassName={({ date }) =>
                    moment(date).isSame(selectedDate, "day")
                      ? "selected-date"
                      : null
                  }
                />
              </div>
            </div>

            <div className="col-12 col-xl-6 col-xxl-5  text-center text-md-start">

              {!selectedDate && (
                <div className="mt-4">
                  <p>
                    To proceed with booking a discovery call, please select a date from the calendar. Once you choose a date, available time slots will appear here.
                  </p>
                </div>
              )}
              {selectedDate && (
                <div className="book-a-call-slots mt-4 mt-lg-1">

                  <div className="row justify-content-center px-xl-3 px-xxl-0">
                    <div className="col-md-4 col-lg-6 ">           <h3 className="mb-1">Time Slots:</h3>
                      <p className="mb-2">
                        {moment(selectedDate).format("LL")}
                      </p>
                      {selectedSlot && (
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start flex-wrap mb-3">
                          <p className="mb-0">{selectedSlot}</p>
                          <button
                            className="book-a-call-contained-button ms-3 border-0"
                            onClick={handleOpenNextForm}
                          >
                            Next
                          </button>
                        </div>
                      )}</div>
                    <div className="col-8 col-md-5 col-xl-6 mb-3 mb-md-0">
                      <FormControl fullWidth>
                        <Autocomplete
                          value={timeZoneValue}
                          onChange={(event, newValue) => {
                            setTimeZoneValue(newValue);
                            setInputs((prev) => ({ ...prev, time_zone: newValue }));
                          }}
                          inputValue={inputs.time_zone}
                          onInputChange={(event, newInputValue) => {
                            setInputs((prev) => ({ ...prev, time_zone: newInputValue }));
                          }}
                          id="controllable-states-demo"
                          options={TimeZones}
                          renderInput={(params) => (
                            <TextField {...params} label="Time Zone *" variant="standard" />
                          )}
                        />
                      </FormControl>

                    </div>
                  </div>


                  {timeSlots.length === 0 ? (
                    <p>No slots available.</p>
                  ) : (
                    <div className="slots">
                      <div className="d-flex flex-wrap gap-2 justify-content-center">
                        {timeSlots.map((slot, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedSlot(slot)}
                            className={`slot-btn ${selectedSlot === slot ? "active" : ""
                              }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="row row form-style justify-content-center mt-3 mt-lg-5" id="bookACall">
            <div className="col-12 col-lg-7 order-2 order-lg-1s">
              <div className="form-left px-3 px-lg-5 pb-3 pb-lg-5">
                <form
                  autoComplete="off"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <div className="row">
                    <div className="col-md-6 mt-4">
                      <TextField
                        id="first_name"
                        label="First Name"
                        variant="standard"
                        required
                        fullWidth
                        name="first_name"
                        value={inputs.first_name}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "var(--wb-menu-hover-color)",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "var(--wb-menu-hover-color)",
                          },
                        }}
                      />
                    </div>
                    <div className="col-md-6 mt-4">
                      <TextField
                        id="last_name"
                        label="Last Name"
                        variant="standard"
                        required
                        fullWidth
                        name="last_name"
                        value={inputs.last_name}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "var(--wb-menu-hover-color)",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "var(--wb-menu-hover-color)",
                          },
                        }}
                      />
                    </div>
                    <div className="col-md-6 mt-4">
                      <TextField
                        id="email"
                        label="Eamil"
                        variant="standard"
                        required
                        fullWidth
                        name="email"
                        value={inputs.email}
                        onChange={handleInputChange}
                        sx={{
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "var(--wb-menu-hover-color)",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "var(--wb-menu-hover-color)",
                          },
                        }}
                      />
                    </div>
                    <div className="col-md-6 mt-4">
                      <TextField
                        id="outlined-basic"
                        name="phone_number"
                        value={inputs.phone_number}
                        onChange={handleInputChange}
                        label="Phone No"
                        variant="standard"
                        required
                        fullWidth
                        sx={{
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "var(--wb-menu-hover-color)",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "var(--wb-menu-hover-color)",
                          },
                        }}
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <TextField
                        id="message"
                        label="Enter Message"
                        variant="standard"
                        name="message"
                        value={inputs.message}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        multiline
                        rows={4}
                        sx={{
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "var(--wb-menu-hover-color)",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "var(--wb-menu-hover-color)",
                          },
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="w-100 contained-button border-0"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 px-0 order-1 order-lg-2">
              <div className="form-right animated-info">
                <h3 className="mb-3">Fill form to book your slot</h3>

                {/* Show this only if date and time are selected */}
                {selectedDate && (
                  <p className="mb-2 d-flex align-items-center">
                    <Icon icon="mdi:calendar" width="24" height="24" className="me-2" />
                    <span>{moment(selectedDate).format("LL")}</span>
                  </p>
                )}

                {selectedSlot && (
                  <p className="mb-3 d-flex align-items-center">
                    <Icon icon="mingcute:time-line" width="24" height="24" className="me-2" />
                    <span>{selectedSlot}</span>
                  </p>
                )}

                {/* If both are selected, show summary box */}
                {selectedDate && selectedSlot ? (
                  <div className="bg-light p-3 rounded">
                    <p className="mb-2">
                      📅 <span>Your Discovery Call is scheduled for:</span>
                    </p>
                    <p className="mb-2">
                      <span style={{ color: '#000' }}>{moment(selectedDate).format("dddd, MMMM Do YYYY")}</span> at <span style={{ color: 'var(--wb-website-hover-background-color)' }}>{selectedSlot}</span>
                    </p>
                    <p className="mb-0">
                      We'll send you an email confirmation shortly with a meeting link.
                    </p>
                  </div>
                ) : (
                  // Show this if nothing selected
                  <div className="bg-white bg-opacity-10 p-3 rounded">
                    <p className="mb-1">
                      ⏳ <span>Please select a date and time slot</span> to proceed with your booking.
                    </p>
                    <p className="mb-0">Once you choose a time, your selection will appear here.</p>
                  </div>
                )}
              </div>
            </div>



          </div>

        </div>
      </section>
    </>
  );
}

export default BookACall;
