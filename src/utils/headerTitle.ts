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
     case Paths.RESOURCING:
      return "Resourcing";
     case Paths.GUIDEDSESSIONS:
      return "Guided sessions";
     case Paths.AFFIRMATIONS:
      return "Affirmations";
    case Paths.PREVIEWAUDIO:
      return "Preview";
      case Paths.SETTINGS:
      return "Settings";
    default:
      return "";
  }
};
