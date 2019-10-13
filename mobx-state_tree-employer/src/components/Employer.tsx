import React from 'react';
import { inject, observer } from 'mobx-react';
import { Root } from '../mst';
import { EmployeeComponent } from './Employee';

interface EmployerComponentProps {
    rootTree?: Root
}

interface EmployerComponentState {
    employeeName: string;
    hours_worked: string;
    searchString: string;
}

@inject("rootTree")
@observer
class EmployerComponent extends React.Component<EmployerComponentProps, EmployerComponentState> {
    constructor(props: EmployerComponentProps) {
        super(props);
        this.state = {
            employeeName: '',
            hours_worked: '',
            searchString: ''
        };
    }

    changeEmployeeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const employeeName = e.target.value;
        this.setState({ employeeName });
    };

    changeHoursWorked = (e: React.ChangeEvent<HTMLInputElement>) => {
        const hours_worked = e.target.value;
        this.setState({ hours_worked });
    };

    searchStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchString = e.target.value;
        this.setState({ searchString });
    };

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {employeeName, hours_worked} = this.state;
        const {rootTree} = this.props;
        if(!rootTree) return null;
        rootTree.employer.newEmployee(employeeName, parseInt(hours_worked));
        this.setState({employeeName: '', hours_worked: ''});
    }

    render() {
        const {rootTree} = this.props;
        const {employeeName, hours_worked, searchString} = this.state;
        if(!rootTree) return null;
        const num_employees = rootTree.employer.num_employees;
        const filtered_employees = rootTree.employer.filtered_employees(searchString);
        return (
            <div>
                <h1>{rootTree.employer.name}</h1>
                <h3>{rootTree.employer.location}</h3>
                <p>{`Number of Employees: ${num_employees}`}</p>
                <hr/>
                <p>New employee</p>
                <form onSubmit={this.onSubmit}>
                    <p>Name: </p>
                    <input value={employeeName} onChange={this.changeEmployeeName} />
                    <p>Hours worked: </p>
                    <input value={hours_worked} onChange={this.changeHoursWorked} />
                    <br/>
                    <button>Submit</button>
                </form>
                <hr/>
                <input placeholder='Search Employee Name' value={searchString} onChange={this.searchStringChange}/>
                {filtered_employees.map(employee => (
                    <EmployeeComponent employee={employee} key={employee.id} />
                ) )}
            </div>
        );
    };
}

export { EmployerComponent };