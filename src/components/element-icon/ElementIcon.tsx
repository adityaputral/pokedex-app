import GrassIcon from '@mui/icons-material/Grass';
import ScienceIcon from '@mui/icons-material/Science';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import PublicIcon from '@mui/icons-material/Public';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ContrastIcon from '@mui/icons-material/Contrast';
import BugReportIcon from '@mui/icons-material/BugReport';
// @ts-ignore
import { ElementType } from './ElementIcon';

export default function ElementIcon({ type }: { type: ElementType }) {
  const typeToIconMapper: Record<ElementType, JSX.Element> = {
    grass: <GrassIcon className="text-green"></GrassIcon>,
    poison: <ScienceIcon className="text-purple"></ScienceIcon>,
    fire: <WhatshotIcon className="text-red"></WhatshotIcon>,
    water: <WaterDropIcon className="text-blue"></WaterDropIcon>,
    bug: <BugReportIcon className="text-bug"></BugReportIcon>,
    normal: <ContrastIcon className="text-grey"></ContrastIcon>,
    electric: <ElectricBoltIcon className="text-yellow"></ElectricBoltIcon>,
    ground: <PublicIcon className="text-brown"></PublicIcon>
  };

  return typeToIconMapper[type];
}
