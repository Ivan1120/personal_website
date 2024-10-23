import React from 'react';

import 'react-circular-progressbar/dist/styles.css';
import { Grid, Icon, List } from 'semantic-ui-react'
import { Divider, Header, Image, Button } from 'semantic-ui-react'
import Colors from '../helper/Colors';
import CircleProgress from '../Components/CircleProgress'
import mmmYYYY from '../helper/basicDateFormater'
import projectList from '../data/Projects';
import Experiences from '../data/Experiences'
import Educations from '../data/Educations'
import Skills from '../data/Skills'
import MyInfo from '../data/MyInfo'
 import myPic_sm from '../img/myPic.PNG'

class ResumePage extends React.Component{

  
    renderDivider(icon, text) {
        return (
            <div className="ui container ">
                <Divider horizontal>
                    <Header as='h2'>
                        <Icon name={icon} />{text}
                    </Header>
                </Divider>
            </div>
        )
    } 


  
 
    renderAboutMe() {
       
        return (
            <div className="ui container">
                <Grid textAlign='center' >
                    <Grid.Column width={4} className="d-flex justify-content-center" >
                    <Image className="rounded-circle"src={myPic_sm} /> 

                    </Grid.Column>
                    <Grid.Column width={7} textAlign='left' className="align-self-center">
                        <Header as='h1'>
                            <Header.Content>
                            {MyInfo.name}
                            <Header.Subheader>{MyInfo.position}</Header.Subheader>
                            </Header.Content>
                        </Header>
                        <p>{MyInfo.description}</p>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign='left' className="align-self-center">
                        <List size='medium' relaxed>
                            <List.Item icon='home' content={MyInfo.location} />
                            <List.Item icon='envelope' content={<a href={`mailto:${MyInfo.email}`}>{MyInfo.email}</a>} />
                            <List.Item icon='phone' content={MyInfo.phone} />
                            <List.Item icon='github' content={<a href={MyInfo.Github}>Github</a>} />
                            <List.Item icon='linkedin' content={<a href={MyInfo.Linkedin}>Linkin</a>} />
                        </List>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }


    renderSkills = (typeList, headerText) => {
        const skills = Skills.filter(s => typeList.includes(s.type))
            .sort((a, b) => b.percentage - a.percentage)
            .map((s, k) => (
                <div className="m-2" key={k} style={{ width: '70px' }}>
                   
                    <CircleProgress percentage={s.percentage} label={s.label} color={Colors.secondary} />
                </div>
            ));
    
        return (
            <>
                <Header as='h3' className="mt-0">{headerText}</Header>
                <div className="d-flex justify-content-left flex-wrap">
                    {skills}
                </div>
            </>
        );
    };
    renderDeveloperSkills() {
        
        return (
            <div className="ui container">
                {this.renderSkills(['language'], 'Language:')}
                {this.renderSkills(['platform','tool'], 'Framework/Library:')}
                {this.renderSkills(['framwork','library'], 'Others:')}
            </div>
        )
    }
   
    renderItem({key, title, subtitle, location, startDate, endDate, description, tools}) {
        
        return (
            <div className="ui container my-1" key={key}>
                <div class="d-flex justify-content-between">
                    <div>
                        <Header as='h2'>
                            {title}
                           
                            <Header.Subheader>
                                {subtitle ? subtitle : ''} {location ? `| ${location}` : ''}
                            </Header.Subheader>
                        </Header>
                    </div>
              
                    <div className="align-self-center" >
                        <Header as='h4' >{startDate ? `${mmmYYYY(startDate)}` : ''} {endDate ? `- ${mmmYYYY(endDate)}` : ''}</Header>
                    </div>
                </div>
                <div>
                    <List bulleted className="mb-1 mt-2">
                        {description ? description.map((des, index) => <List.Item key={index}>{des}</List.Item>) : ''}
                    </List>
                    <List celled horizontal className="mt-1 ml-4 mb-3" size="tiny">
                        {tools ? tools.map((tool, index) => <List.Item key={index}>{tool}</List.Item>) : ''}
                    </List>
                </div>
            </div >
        )
    }
   

    renderExperiences() {
        return (<div>
            {Experiences
                .sort((a, b) => b.endDate - a.endDate)
                .map((item, index) => {
                    return this.renderItem({
                        key:index,
                        title:item.jobTitle,
                        subtitle:item.company,
                        location:item.location,
                        startDate:item.startDate,
                        endDate:item.endDate,
                        description:item.description,
                    }
                    )
                })}
        </div>)
    }
    
    renderProjects() {
        return (<div>
            {projectList
                .filter(p => p.showOnResume)
                .sort((a, b) => b.endDate - a.endDate)
                .map((item, index) => {
                    return this.renderItem({
                        key:index,
                        title:item.projectName,
                        subtitle:item.role,
                        startDate:item.startDate,
                        endDate:item.endDate,
                        description:item.resumeOverview,
                        tools:item.teckStack.map((tech) => tech.techName)

                    }
                        
                    )
                })}
        </div>)
    }

   
    renderEducation() {
        return (<div>
            {Educations
                .sort((a, b) => b.endDate - a.endDate)
                .map((item, index) => {
                    return this.renderItem({
                        key:index,
                        title:item.school,
                        subtitle:item.major,
                        startDate:item.startDate,
                        endDate:item.endDate
                    }
                        
                    )
                })}
        </div>)
    }

    render(){
        return (
            <div className="p-4">
                {this.renderAboutMe()}
                {this.renderDivider('keyboard', 'Developer Skills')}
                {this.renderDeveloperSkills()}
                {this.renderDivider('briefcase', 'Work Experiences')}
                {this.renderExperiences()}
                {this.renderDivider('rocket', 'Projects')}
                {this.renderProjects()}
                {this.renderDivider('graduation cap', 'Education')}
                {this.renderEducation()} 
            </div>
        )
    }
}

export default ResumePage;