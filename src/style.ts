import { css } from '@emotion/react';

export const AppCss = {
    app: css`
        text-align: center;
    `,
};

export const HeaderCss = {
    header: css`
        background-color: lightgrey;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
    `,
    actionList: css`` 
};

export const CalendarCss = {
    calendar: css`
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(5, 1fr);
        height: calc(100vh - 45px);
    `
};

export const DayCss = {
    day: (isToday: boolean, active: boolean) => css`
        padding: 5px;
        border: 1px grey solid;
        ${isToday && "border: green 2px solid;"}
        ${active && "background: lightgrey"}
    `
}

export const CreateTaskCss = {
    form: css`
        display: flex;
        flex-direction: column;
    `,
    input: css`
        display: inline-block;
        width: 100%;
        font: inherit;
        font-size: 20px;
        border: none;
        outline: none;
        padding-left: 4px;
        padding-right: 4px;
    `,
    button: (cancel: boolean) => css`
        padding: 8px 16px;
        border-radius: 2px;
        background-color: ${cancel ? "lightgrey" : "#3f51b5"};
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        text-align: center;
        display: inline-block;
        color: #fff;
        border: 0;
        text-decoration: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 18px;
        line-height: 24px;
        font-style: normal;
        font-weight: 500;
        min-width: 180px;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    `
}

export const DatePickerCss = {

}

export const ModalCss = {
    overlay: css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1200;
    `,
    modal: css`
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 24px);
        background-color: white;
        padding: 20px;
        border-radius: 5px;
    `,
}

