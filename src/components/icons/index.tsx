import React from 'react';
import {
  AppleLogo as PhAppleLogo,
  ArrowCounterClockwise as PhArrowCounterClockwise,
  ArrowLeft as PhArrowLeft,
  ArrowRight as PhArrowRight,
  Bell as PhBell,
  Book as PhBook,
  BookOpen as PhBookOpen,
  Brain as PhBrain,
  Calendar as PhCalendar,
  CaretLeft as PhCaretLeft,
  CaretRight as PhCaretRight,
  Camera as PhCamera,
  ChatCircle as PhChatCircle,
  Checks as PhChecks,
  Envelope as PhEnvelope,
  Gear as PhGear,
  Lock as PhLock,
  MapPin as PhMapPin,
  Crown as PhCrown,
  CurrencyDollar as PhCurrencyDollar,
  FileText as PhFileText,
  FloppyDisk as PhFloppyDisk,
  Funnel as PhFunnel,
  GridFour as PhGridFour,
  House as PhHouse,
  Image as PhImage,
  Lightning as PhLightning,
  LightningSlash as PhLightningSlash,
  MagnifyingGlass as PhMagnifyingGlass,
  Medal as PhMedal,
  Microphone as PhMicrophone,
  PencilSimple as PhPencilSimple,
  Phone as PhPhone,
  PaperPlaneRight as PhPaperPlaneRight,
  SignOut as PhSignOut,
  Robot as PhRobot,
  ShareNetwork as PhShareNetwork,
  Sparkle as PhSparkle,
  Square as PhSquare,
  Star as PhStar,
  StopCircle as PhStopCircle,
  Target as PhTarget,
  TrendUp as PhTrendUp,
  Trophy as PhTrophy,
  User as PhUser,
  Users as PhUsers,
  Clock as PhClock,
  X as PhX,
} from 'phosphor-react-native';

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const Home = (props: IconProps) => <PhHouse size={props.size} color={props.color} />;
export const Calendar = (props: IconProps) => <PhCalendar size={props.size} color={props.color} />;
export const CalendarClock = (props: IconProps) => <PhCalendar size={props.size} color={props.color} />;
export const Book = (props: IconProps) => <PhBook size={props.size} color={props.color} />;
export const BookOpen = (props: IconProps) => <PhBookOpen size={props.size} color={props.color} />;
export const Bell = (props: IconProps) => <PhBell size={props.size} color={props.color} />;
export const Grid = (props: IconProps) => <PhGridFour size={props.size} color={props.color} />;
export const Search = (props: IconProps) => <PhMagnifyingGlass size={props.size} color={props.color} />;
export const Trophy = (props: IconProps) => <PhTrophy size={props.size} color={props.color} />;
export const User = (props: IconProps) => <PhUser size={props.size} color={props.color} />;
export const Clock = (props: IconProps) => <PhClock size={props.size} color={props.color} />;
export const Filter = (props: IconProps) => <PhFunnel size={props.size} color={props.color} />;
export const Star = (props: IconProps) => <PhStar size={props.size} color={props.color} />;
export const Users = (props: IconProps) => <PhUsers size={props.size} color={props.color} />;
export const Brain = (props: IconProps) => <PhBrain size={props.size} color={props.color} />;
export const Zap = (props: IconProps) => <PhLightning size={props.size} color={props.color} />;
export const TrendingUp = (props: IconProps) => <PhTrendUp size={props.size} color={props.color} />;
export const ChevronRight = (props: IconProps) => <PhCaretRight size={props.size} color={props.color} />;
export const ChevronLeft = (props: IconProps) => <PhCaretLeft size={props.size} color={props.color} />;
export const Sparkles = (props: IconProps) => <PhSparkle size={props.size} color={props.color} />;
export const Mic = (props: IconProps) => <PhMicrophone size={props.size} color={props.color} />;
export const Camera = (props: IconProps) => <PhCamera size={props.size} color={props.color} />;
export const FileText = (props: IconProps) => <PhFileText size={props.size} color={props.color} />;
export const MessageCircle = (props: IconProps) => <PhChatCircle size={props.size} color={props.color} />;
export const ImageIcon = (props: IconProps) => <PhImage size={props.size} color={props.color} />;
export const Target = (props: IconProps) => <PhTarget size={props.size} color={props.color} />;
export const ArrowRight = (props: IconProps) => <PhArrowRight size={props.size} color={props.color} />;
export const ArrowLeft = (props: IconProps) => <PhArrowLeft size={props.size} color={props.color} />;
export const Send = (props: IconProps) => <PhPaperPlaneRight size={props.size} color={props.color} />;
export const Bot = (props: IconProps) => <PhRobot size={props.size} color={props.color} />;
export const Share2 = (props: IconProps) => <PhShareNetwork size={props.size} color={props.color} />;
export const Crown = (props: IconProps) => <PhCrown size={props.size} color={props.color} />;
export const Medal = (props: IconProps) => <PhMedal size={props.size} color={props.color} />;
export const DollarSign = (props: IconProps) => <PhCurrencyDollar size={props.size} color={props.color} />;
export const StopCircle = (props: IconProps) => <PhStopCircle size={props.size} color={props.color} />;
export const Save = (props: IconProps) => <PhFloppyDisk size={props.size} color={props.color} />;
export const RotateCcw = (props: IconProps) => <PhArrowCounterClockwise size={props.size} color={props.color} />;
export const ZapOff = (props: IconProps) => <PhLightningSlash size={props.size} color={props.color} />;
export const X = (props: IconProps) => <PhX size={props.size} color={props.color} />;
export const CheckCheck = (props: IconProps) => <PhChecks size={props.size} color={props.color} />;
export const Layout = (props: IconProps) => <PhSquare size={props.size} color={props.color} />;
export const Apple = (props: IconProps) => <PhAppleLogo size={props.size} color={props.color} />;
export const Cog = (props: IconProps) => <PhGear size={props.size} color={props.color} />;
export const Settings = (props: IconProps) => <PhGear size={props.size} color={props.color} />;
export const Lock = (props: IconProps) => <PhLock size={props.size} color={props.color} />;
export const LogOut = (props: IconProps) => <PhSignOut size={props.size} color={props.color} />;
export const Mail = (props: IconProps) => <PhEnvelope size={props.size} color={props.color} />;
export const Phone = (props: IconProps) => <PhPhone size={props.size} color={props.color} />;
export const MapPin = (props: IconProps) => <PhMapPin size={props.size} color={props.color} />;
export const Edit2 = (props: IconProps) => <PhPencilSimple size={props.size} color={props.color} />;
export const Award = (props: IconProps) => <PhMedal size={props.size} color={props.color} />;


