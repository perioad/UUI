import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DocBuilder } from '@epam/uui-docs';
import { CalendarProps } from '@epam/uui-components';
import { Calendar } from '../Calendar';
import { iEditable } from '../../../docs';
import { FormContext, DefaultContext, GridContext, ResizableContext } from '../../../docs';

const DatepickerDoc = new DocBuilder<CalendarProps<Dayjs>>({ name: 'Calendar', component: Calendar })
    .implements([iEditable] as any)
    .prop('value', { examples: [{ value: dayjs('2017-12-30') }] })
    .prop('displayedDate', { examples: [{ value: dayjs('2017-12-30'), isDefault: true }], isRequired: true })
    .prop('filter', { examples: [
            {
                name: 'Filter before current day',
                value: (day: Dayjs) => day.valueOf() >= dayjs().subtract(1, 'day').valueOf(),
            },
        ] })
    .prop('hideAnotherMonths', {examples: [true, false]})
    .withContexts(DefaultContext, FormContext, ResizableContext, GridContext);

export = DatepickerDoc;
