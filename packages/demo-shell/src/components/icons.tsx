import type { JSX } from 'preact';
import {
  AlertTriangle as LucideAlertTriangle,
  Box as LucideBox,
  ChevronDown as LucideChevronDown,
  ChevronUp as LucideChevronUp,
  Circle as LucideCircle,
  Cylinder as LucideCylinder,
  Disc as LucideDisc,
  Download as LucideDownload,
  Eye as LucideEye,
  EyeOff as LucideEyeOff,
  FolderOpen as LucideFolderOpen,
  Github as LucideGithub,
  GitCompareArrows as LucideGitCompareArrows,
  Info as LucideInfo,
  Layers as LucideLayers,
  Lightbulb as LucideLightbulb,
  Play as LucidePlay,
  Plus as LucidePlus,
  Save as LucideSave,
  Settings as LucideSettings,
  Square as LucideSquare,
  Sun as LucideSun,
  Triangle as LucideTriangle,
} from 'lucide-preact';

/**
 * `lucide-preact` types its icons with `ComponentChildren` return which TS 4.4
 * (this project's pinned version) rejects as a valid JSX element. Cast once
 * here so consumers stay clean. The icons themselves are unchanged.
 */
type IconProps = JSX.SVGAttributes<SVGSVGElement> & { size?: number | string };
type IconFC = (props: IconProps) => JSX.Element;
const cast = <T,>(c: T) => c as unknown as IconFC;

export const AlertTriangle = cast(LucideAlertTriangle);
export const Box = cast(LucideBox);
export const ChevronDown = cast(LucideChevronDown);
export const ChevronUp = cast(LucideChevronUp);
export const Circle = cast(LucideCircle);
export const Cylinder = cast(LucideCylinder);
export const Disc = cast(LucideDisc);
export const Download = cast(LucideDownload);
export const Eye = cast(LucideEye);
export const EyeOff = cast(LucideEyeOff);
export const FolderOpen = cast(LucideFolderOpen);
export const Github = cast(LucideGithub);
export const GitCompareArrows = cast(LucideGitCompareArrows);
export const Info = cast(LucideInfo);
export const Layers = cast(LucideLayers);
export const Lightbulb = cast(LucideLightbulb);
export const Play = cast(LucidePlay);
export const Plus = cast(LucidePlus);
export const Save = cast(LucideSave);
export const Settings = cast(LucideSettings);
export const Square = cast(LucideSquare);
export const Sun = cast(LucideSun);
export const Triangle = cast(LucideTriangle);
