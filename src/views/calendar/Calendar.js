import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { CCard, CCardBody, CCardHeader } from '@coreui/react-pro'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { restApiGet, restApiPost } from 'src/api_calls/rest'
import { mainUrl } from 'src/components/Common'


export const Calendar = () => {
  const { user } = useAuth0();
  const [loading, setLoading] = useState(false)
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  // Retrieve calendar
  React.useEffect(() => {
    setLoading(true);
    Promise.resolve(
      restApiGet(mainUrl + '/calendars/', { params: { user_email: user.email } })
        // retrieve events
        .then(function (value) {
          if (value.length > 0) {
            console.log("retrieving events...");
          } else {
            let calendar = {
              user_email: user.email,
            }
            // Create calendar
            Promise.resolve(
              restApiPost(mainUrl + '/calendars/create', calendar, true)
                .then(function (value) {
                  setLoading(false);
                  setClientID(value.client.id);
                }).catch(function () {
                  setLoading(false);
                }));
          }
        }));
  }, []);




  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible)
  }

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }

  const handleEventClick = (clickInfo) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (events) => {
    setCurrentEvents(events)
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        Personal Calendar of <strong>{user.email}</strong>
      </CCardHeader>
      <CCardBody>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire: */
        // eventAdd={function () { }}
        // eventChange={function () { }}
        // eventRemove={function () { }}

        />
      </CCardBody>
    </CCard>
  )
}

const renderEventContent = (eventInfo) => {
  return (

    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default withAuthenticationRequired(Calendar)