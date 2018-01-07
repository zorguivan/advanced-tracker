import React from 'react'
import { Button, Container, Header, Icon, Form, Grid, TextArea, Menu, Divider, List, Modal, Input, Select, Label } from 'semantic-ui-react';
import * as ProjectsActions from '../actions/ProjectsActions';
import * as TodosActions from '../actions/TodosActions';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import moment from 'moment';
@connect((state) => {
    return { projects: state.get('projects') }
})

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTodo : Immutable.Map({description: ""}),
            currentTodo: Immutable.Map({}),
            different: false
        };
    }
    componentWillMount() {
        ProjectsActions.getProjects();
    }
    todoChanged(target, e){
        let value = e.target.value;
        console.log(value.length)
        let todo = this.state.currentTodo.set(target, value);
        if(ths.state.currentTodo.get('description') != this.state.selectedTodo.get('description')){
            this.setState({different: true})
        } else if(ths.state.currentTodo.get('description') == this.state.selectedTodo.get('description')){
            this.setState({different: false})            
        }
        this.setState({currentTodo: todo})
    }
    addTodo(){
        this.setState({selectedTodo: todo});        
        let todo = this.state.currentTodo.set('date', moment().unix());
            todo = todo.set('project_id', '00');
        TodosActions.addTodo(todo.toJS())
    }
    
    render() {
        let projects = this.props.projects || Immutable.List([]);
        let header = 'Todo';
        if(this.state.different){
            header = 'Todo *';
        }
        return (
            <div>
                <Menu size='small'>
                    <Menu.Item name='home' active={true} />
                    <Menu.Item name='Todos' active={false} />
                </Menu>
                <Container>

                    <Grid>
                        <Grid.Column width={8} >
                            
                            <Form>
                            <Header as='h2' icon floated={'left'}>
                                <Icon name='write' color={'green'} />
                                {header}
                                <Header.Subheader>
                                </Header.Subheader>
                            </Header>
                                <TextArea style={{ padding: '8px' }} autoHeight placeholder='Edit your Todo.' rows={4} 
                                value={this.state.currentTodo.get('description')} 
                                onChange={this.todoChanged.bind(this, 'description')}/>
                            </Form><Divider hidden={true} />
                            <Button.Group floated={'right'}>
                                <Modal size={'small'} trigger={<Button color={'green'}>Save</Button>} closeIcon>
                                    <Header icon='save' content='Save Todo?' />
                                    <Modal.Content>
                                    <Input placeholder="Todo's Title" onChange={this.todoChanged.bind(this, 'name')}/>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button color='black'>
                                            <Icon name='remove' /> Cancel
                                        </Button>
                                        <Button color='green' onClick={this.addTodo.bind(this)}>
                                            <Icon name='save' /> Save
                                        </Button>
                                    </Modal.Actions>
                                </Modal>
                                <Button.Or />
                                <Modal size={'small'} trigger={<Button color={'blue'}>Add to Project</Button>} closeIcon>
                                    <Header icon='save' content='Save Todo?' />
                                    <Modal.Content>
                                    <Grid>
                                        <Grid.Column width={5}>
                                        <Label>
                                            Todo's Name
                                        </Label>
                                            <Input placeholder='Name here' />
                                        </Grid.Column>
                                        <Grid.Column width={1}>
                                        </Grid.Column>                                                        
                                        <Grid.Column width={4}>
                                        <Label>
                                            Project
                                        </Label>
                                            <Select label="Add to Project?" placeholder='No !' options={
                                                 [{key:"somethings", value: 'none', text:"--None--"},
                                                 {key:"something", value: 'something', text:"aaaaa"}]
                                            } />
                                        </Grid.Column>
                                    </Grid>
                                    
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button color='black'>
                                            <Icon name='remove' /> Cancel
                                        </Button>
                                        <Button color='green'>
                                            <Icon name='save' /> Save
                                        </Button>
                                    </Modal.Actions>
                                </Modal>
                            </Button.Group>
                        </Grid.Column>
                        <Grid.Column width={6} textAlign={'right'}>
                            <Header as='h2' icon>
                                <Icon name='browser' color={'green'} size='tiny' />
                                Projects
                                <Header.Subheader>
                                </Header.Subheader>
                            </Header>
                            <List>
                                {projects.map((project, index) => {
                                    return <List.Item as='a' key={index}>{project.get('name')}</List.Item>
                                })}
                            </List>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>

        )
    }
}
export default Home;