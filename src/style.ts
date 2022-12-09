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
    actionList: css``,
    input: css`
        display: inline;
        font-size: 18px;
        border: none;
        outline: none;
        margin: 0px 10px;  
        font-family: inherit;
        background-color: lightgrey;
    ` 
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
    title: css `
        font-size: 20px;
        font-weight: 600;
    `,
    label: css `
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        margin-top: 20px;
    `,
    form: css`
        display: flex;
        flex-direction: column;
    `,
    input: css`
        width: 100%;
        font-size: 18px;
        border: none;
        border-bottom: 1px solid grey;
        outline: none;
        padding-left: 4px;
        padding-right: 4px;
        margin-top: 10px;
        font-family: inherit;
    `,
    action: css`
        display: flex;
    `,
    button: (cancel: boolean) => css`
        margin: 35px 5px 0px 5px;
        padding: 8px 16px;
        border-radius: 2px;
        background-color: ${cancel ? "#fff" : "#3f51b5"};
        text-align: center;
        display: inline-block;
        color: ${cancel ? "#000" : "#fff"};
        border: 0;
        text-decoration: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 15px;
        line-height: 24px;
        font-style: normal;
        font-weight: 500;
        min-width: 180px;
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

