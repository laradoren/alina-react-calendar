import { css } from '@emotion/react';

export const AppCss = {
    app: css`
        text-align: center;
    `,
};

export const HeaderCss = {
    header: css`
        background-color: green;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
    `,
    date: css`
        display: flex;
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
        background-color: green;
    `, 
    button: css`
        font-size: 26px;
        background-color: green;
        color: white;
        font-weight: 600;
        border: none;
        padding: 0;
        line-height: 0;
    `,
    action: css`
        background-color: green;
        font-weight: 500;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px 12px;
        margin-left: 20px;
        cursor: pointer;
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
        ${active && "background: #acecb7ff;"}
        position: relative;
    `,
    activeButton: css`
        color: green;
        position: absolute;
        top: 1px;
        right: 2px;
        z-index: 100;
        font-size: 20px;
        transition: opacity 750ms cubic-bezier(0.4, 0, 0.2, 1);
    `,
    tasks: css`
        margin-top: 20px;
    `,
    task: (color: string) => css`
        background-color: ${color}aa;
        font-weight: 600;
        margin-top: 3px;
    `,
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
        border-bottom: 2px solid green;
        outline: none;
        padding-left: 4px;
        padding-right: 4px;
        margin-top: 10px;
        font-family: inherit;
    `,
    // colors: css``,
    // color: (color: string) => css`
    //     background-color: red;
    // `,
    action: css`
        display: flex;
    `,
    button: (cancel: boolean) => css`
        margin: 35px 5px 0px 5px;
        padding: 8px 16px;
        border-radius: 2px;
        background-color: ${cancel ? "#fff" : "green"};
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

export const DayDetailsCss = {
    content: css`
        width: 100%;
        display: flex;
    `,
    button: css`
        margin: 25px 5px 0px 5px;
        padding: 8px 16px;
        border-radius: 2px;
        background-color: green;
        text-align: center;
        display: inline-block;
        color: #fff;
        border: 0;
        text-decoration: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 15px;
        line-height: 24px;
        font-style: normal;
        font-weight: 500;
        min-width: 180px;
    `,
    dayDetails: css`
        padding: 5px;
    `,
    taskDetails: css`
        padding: 5px 5px 4px 45px;
    `,
    day: css`
        font-weight: 600;
        margin: 10px;
        font-size: 20px;
    `,
    line: css`
        border: 1px solid green;
        background-color: green;
    `,
    task: (color:string) => css`
        background-color: ${color}aa;
        border-radius: 5px;
        margin: 3px 0;
        padding: 3px 0;
    `,
    title: css`
        margin: 10px 0;
        font-weight: 400;
        font-size: 18px;
    `,
    taskList: css``,
    desc: css`
        font-size: 15px;
        opacity: 0.5;
    `
}

export const ActiveTaskCss = {
    form: css`
        display: flex;
        flex-direction: column;
    `,
    input: css`
        width: 100%;
        font-size: 18px;
        border: none;
        border-bottom: 2px solid green;
        outline: none;
        padding-left: 4px;
        padding-right: 4px;
        margin-top: 10px;
        font-family: inherit;
    `,
    icon: css`
        color: green;
    `,
    label: css `
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    margin-top: 20px;
    `,

    inputColor: css`
        width: 100%;
        font-size: 18px;
        border: none;
        outline: none;
        padding-left: 4px;
        padding-right: 4px;
        margin-top: 10px;
        font-family: inherit;
        background-color: white;
    `,
    title: css`
        margin: 10px 0;
        font-weight: 400;
        font-size: 18px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;
    `,
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

