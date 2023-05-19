import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work"
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            S. D. PRAJAPATI ACADEMY H. S. SCHOOL , INDORE, M.P.
          </h3>
          <p>High School Certificate </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            GOVT. BAL VINAY MANDIR EXCELLENCE H. S. SCHOOL , INDORE, M.P.
          </h3>
          <p>Higher School Certificate </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SHRI VAISHNAV VIDYAPEETH VISHWAVIDYALAYA , INDORE, M.P.
          </h3>
          <h4>Bachelor of Technology </h4>
          <p>Mechanical Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Newton School
          </h3>
          <p>Full Stack Web Development</p>
        </VerticalTimelineElement>
       
      </VerticalTimeline>
    </div>
  )
}

export default Experience
