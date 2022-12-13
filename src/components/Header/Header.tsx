import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { HeaderCss } from "../../style";
import { IHeader, ITasksInDay } from "../../utils/types";
import { parseStringToDay } from "../../utils/utils";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import {HiSearch } from "react-icons/hi";
import * as htmlToImage from 'html-to-image';

const Header: React.FC<IHeader> = ({ onHandleCreateTaskModal }) => {
  const { currentDate, setCurrentDate, filter, setFilter, filteredTasks, dispatchCallTask } =
    useContext(GlobalContext);

  const setPrevMonth = () => {
    let prevDayInMonth = parseStringToDay(currentDate);
    setCurrentDate(
      dayjs(
        new Date(
          prevDayInMonth.year(),
          prevDayInMonth.month() - 1,
          prevDayInMonth.date()
        )
      ).format("YYYY-MM-DD")
    );
  };

  const setNextMonth = () => {
    const prevDayInMonth = parseStringToDay(currentDate);
    setCurrentDate(
      dayjs(
        new Date(
          prevDayInMonth.year(),
          prevDayInMonth.month() + 1,
          prevDayInMonth.date()
        )
      ).format("YYYY-MM-DD")
    );
  };

  const onExportData = () => {
    //removing empty space from day tasks
    const tasks: ITasksInDay = {};
    Object.keys(filteredTasks).map((item:string) => {
      if(filteredTasks[item].length) {
        tasks[item] = filteredTasks[item];
      }
      return item;
    });
    
    const fileName = "calendar";
    const json = JSON.stringify(tasks, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    // create "a" HTLM element with href to file
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }

  let fileReader:any;
  
  const handleFileRead = (e:any) => {
    const content = fileReader.result;
    const payload = {
      label: "",
      color: "",
      date: "",
      id: "",
      tasksFromFile: JSON.parse(content)
    }
    dispatchCallTask({type: "set", payload: payload});
  };

  const onImportData = (file: any) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  }

  const onSaveAsPicture = () => {
    const node = document.getElementById('calendar');
    if(node) {
      htmlToImage.toJpeg(node, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'calendar.jpeg';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
    }
  }

  return (
    <header css={HeaderCss.header}>
      <div css={HeaderCss.date}>
        <button css={HeaderCss.button} onClick={setPrevMonth}>
          <GrFormPrevious />
        </button>
        <input
          type="date"
          css={HeaderCss.input}
          name="date"
          value={currentDate}
          onChange={(e) => setCurrentDate(e.target.value)}
        />
        <button onClick={setNextMonth} css={HeaderCss.button}>
          <GrFormNext />
        </button>
        <button onClick={onHandleCreateTaskModal} css={HeaderCss.action}>Create task</button>
      </div>
      <div css={HeaderCss.filter}>
        <HiSearch />
        <input
          value={filter}
          css={HeaderCss.input}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div css={HeaderCss.actionList}>
        <button css={HeaderCss.action} onClick={onExportData}>Save as Json</button>
        <label htmlFor="file-upload" css={HeaderCss.fileAction}>
            Load from JSON
        </label>
        <input id="file-upload" type="file" css={HeaderCss.file} onChange={(e:any) => onImportData(e.target.files[0])}/>
        <button css={HeaderCss.action} onClick={onSaveAsPicture}>Save as picture</button>
      </div>
    </header>
  );
};

export default Header;
