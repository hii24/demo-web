import { Paths } from "../types/path.type";

export const headerTitle = (path: string) => {
  switch (path) {
    case Paths.STARTSESSION:
      return "Start Session";
    case Paths.CLIENTS:
    case Paths.CLIENTPROFILE:
      return "Clients";
    case Paths.SESSIONINFO:
      return 'Session Info';
    case Paths.HISTORY:
      return "History";
    default:
      return "";
  }
};
