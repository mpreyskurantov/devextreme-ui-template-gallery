import React, { useState } from 'react';

import Form, { SimpleItem, GroupItem, Label } from 'devextreme-react/form';

import { FormTask } from '../../shared/types/task-form';

import SelectBox from 'devextreme-react/select-box';
import TextBox from 'devextreme-react/text-box';
import DropDownButton from 'devextreme-react/drop-down-button';
import Calendar from 'devextreme-react/calendar';

import { PriorityTask } from '../priority-task/PriorityTask';
import { StatusTask } from '../status-task/StatusTask';

import { PRIORITY_ITEMS, STATUS_ITEMS } from '../../shared/constants';

import { TaskPriority, TaskStatus } from '../../shared/types/task';
import { FormEdit, FormEditComponent } from '../../shared/types/task-form';

type Context = {
    data: { priority: string, status: string, company: string, owner: string },
    setValue: (obj: { priority?: TaskPriority; status?: TaskStatus }) => void,
    dueDateChange: (value: Date) => void,
}

const FormContext = React.createContext<Context>({} as Context);

const EditComponent = ({ items, editComponent: Component, label, value, setValue }: FormEditComponent) => {
  const EditField = (data: string) => (
    <div className='form-custom-list-prop'>
      {data && <Component text={data}></Component>}
      <TextBox readOnly></TextBox>
    </div>
  );
  const EditItem = (data: string) => <Component text={data}></Component>;

  return <SelectBox items={items} fieldRender={EditField} itemRender={EditItem} label={label} value={value} onValueChange={(value) => setValue(value)}></SelectBox>;
};

const EditStatus = ({ label, value, setValue }: FormEdit) => {
  const updateValue = (value) => {
    setValue({ status: value });
  };
  return <EditComponent items={STATUS_ITEMS} editComponent={StatusTask} label={label} value={value} setValue={updateValue} />;
};
const EditPriority = ({ label, value, setValue }: FormEdit) => {
  const updateValue = (value) => {
    setValue({ priority: value });
  };
  return <EditComponent items={PRIORITY_ITEMS} editComponent={PriorityTask} label={label} value={value} setValue={updateValue} />;
};

const CompanyField = ({ editorOptions }) => (
  <FormContext.Consumer>
    {({ data }) => (
      <div className='details'>
        <label className='dx-texteditor-label'>{editorOptions.label}</label>
        <span className='dx-theme-accent-as-text-color'>{data.company}</span>
      </div>
    )}
  </FormContext.Consumer>
);

const OwnerField = ({ editorOptions }) => (
  <FormContext.Consumer>
    {({ data }) => (
      <div className='details'>
        <label className='dx-texteditor-label'>{editorOptions.label}</label>
        <span className='dx-theme-accent-as-text-color'>{data.owner}</span>
      </div>
    )}
  </FormContext.Consumer>
);

const DropDownContentTemplate = () => <FormContext.Consumer>{({ dueDateChange }) => <Calendar onValueChange={dueDateChange} />}</FormContext.Consumer>;

const DueDateTemplate = ({ editorOptions }) => {
  return (
    <DropDownButton
      icon='event'
      stylingMode='outlined'
      text={editorOptions.label}
      dropDownOptions={{ width: 'auto' }}
      dropDownContentRender={DropDownContentTemplate}
      showArrowIcon={false}
    ></DropDownButton>
  );
};

const PriorityField = ({ editorOptions }) => (
  <FormContext.Consumer>
    {({ data }) => (
      <div className='info'>
        <label className='dx-texteditor-label'>{editorOptions.label}</label>
        <PriorityTask text={data.priority}></PriorityTask>
      </div>
    )}
  </FormContext.Consumer>
);

const PriorityEditing = ({ editorOptions }) => (
  <FormContext.Consumer>{({ data, setValue }) => <EditPriority value={data.priority} label={editorOptions.label} setValue={setValue}></EditPriority>}</FormContext.Consumer>
);

const StatusEditing = ({ editorOptions }) => (
  <FormContext.Consumer>{({ data, setValue }) => <EditStatus value={data.status} label={editorOptions.label} setValue={setValue}></EditStatus>}</FormContext.Consumer>
);

const StatusField = ({ editorOptions }) => (
  <FormContext.Consumer>
    {({ data }) => (
      <div className='info'>
        <label className='dx-texteditor-label'>{editorOptions.label}</label>
        <StatusTask text={data.status}></StatusTask>
      </div>
    )}
  </FormContext.Consumer>
);

export const TaskFormDetails = ({ editing, data, onDataChanged }: { editing: boolean, data: FormTask, onDataChanged: (data) => void }) => {
  const [isDueDate, setDueDate] = useState(false);
  const editorOptions = { stylingMode: editing ? 'filled' : 'underlined' };
  const dueDateChange = (value) => {
    onDataChanged({ ...data, ...{ dueDate: value } });
    setDueDate(!!value);
  };

  const updateTask = (obj) => {
    onDataChanged({ ...data, ...obj });
  };
  return (
    <FormContext.Provider value={{ data: data, setValue: updateTask, dueDateChange: dueDateChange }}>
      <Form formData={data} labelMode='floating' readOnly={!editing}>
        <SimpleItem dataField='text' visible={editing}></SimpleItem>
        <GroupItem itemType='group' caption='Details' colCount={2}>
          <SimpleItem dataField='company' render={editing ? undefined : CompanyField} editorOptions={editorOptions}></SimpleItem>
          <SimpleItem dataField='owner' render={editing ? undefined : OwnerField} editorOptions={editorOptions}>
            <Label text='Assigned to'></Label>
          </SimpleItem>
          <SimpleItem dataField='priority' render={editing ? PriorityEditing : PriorityField}></SimpleItem>
          <SimpleItem dataField='status' render={editing ? StatusEditing : StatusField}></SimpleItem>
          <SimpleItem
            dataField='startDate'
            editorType='dxDateBox'
            editorOptions={{
              name: 'Start Date',
              placeholder: 'MM/dd/y',
              displayFormat: 'MM/dd/y',
              ...editorOptions,
            }}
          ></SimpleItem>
          <SimpleItem
            dataField='dueDate'
            editorType='dxDateBox'
            render={editing || isDueDate ? undefined : DueDateTemplate}
            editorOptions={{
              name: 'Due Date',
              placeholder: 'MM/dd/y',
              displayFormat: 'MM/dd/y',
              onValueChange: dueDateChange,
              ...editorOptions,
            }}
          ></SimpleItem>
        </GroupItem>

        <SimpleItem colSpan={2} dataField='description' editorType='dxTextArea' editorOptions={editorOptions}>
          <Label text='Details'></Label>
        </SimpleItem>
      </Form>
    </FormContext.Provider>
  );
};