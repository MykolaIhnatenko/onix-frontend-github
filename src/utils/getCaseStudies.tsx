import PageLinks from '../constants/PageLinks';
import CaseStudiesSeeAllCases from '../components/CaseStudiesSeeAllCases/CaseStudiesSeeAllCases';
import CaseStudiesSeeAllCasesSmall from '../components/CaseStudiesSeeAllCasesSmall/CaseStudiesSeeAllCasesSmall';
import CaseStudyCarouselItem from 'components/CaseStudyCarouselItem/CaseStudyCarouselItem';
import CaseStudyCarouselItemSmall from 'components/CaseStudyCarouselItemSmall/CaseStudyCarouselItemSmall';
import { ICaseStudiesData } from 'components/CaseStudyCarouselItem/interfaces/ICaseStudyCarouselItem';
import CaseStudyVideoCarouselItem from 'components/CaseStudyVideoCarouselItem/CaseStudyVideoCarouselItem';

import InnerVRLogo from '@/images/caseStudies/img_innerVRLogo.webp';
import InnerVRBg from '@/images/caseStudies/img_innerVRBg@2x.webp';
import InnerVRBgTablet from '@/images/caseStudies/img_innerVRBgTablet@2x.webp';
import InnerVRBgMobile from '@/images/caseStudies/img_innerVRBgMobile@2x.webp';
import DigitalHealthLogo from '@/images/caseStudies/img_digitalHealthLogo.webp';
import DigitalHealthBg from '@/images/caseStudies/img_digitalHealth@2x.webp';
import DigitalHealthTabletBg from '@/images/caseStudies/img_digitalHealthTablet@2x.webp';
import DigitalHealthMobileBg from '@/images/caseStudies/img_digitalHealthMobile@2x.webp';
import EdplusLogo from '@/images/caseStudies/img_edplusLogo.webp';
import EdplusBg from '@/images/caseStudies/img_edplusBg@2x.webp';
import EdplusTabletBg from '@/images/caseStudies/img_edplusBgTablet@2x.webp';
import EdplusMobileBg from '@/images/caseStudies/img_edplusBgMobile@2x.webp';
import ProductScopeLogo from '@/images/caseStudies/img_productScopeLogo.webp';
import ProductScopeBg from '@/images/caseStudies/img_productScope@2x.webp';
import ProductScopeTabletBg from '@/images/caseStudies/img_productScopeTablet@2x.webp';
import ProductScopeMobileBg from '@/images/caseStudies/img_productScopeMobile@2x.webp';
import ImageClassificationLogo from '@/images/caseStudies/img_imageClassificationLogo.webp';
import ImageClassificationBg from '@/images/caseStudies/img_imageClassification@2x.webp';
import ImageClassificationTabletBg from '@/images/caseStudies/img_imageClassificationTablet@2x.webp';
import ImageClassificationMobileBg from '@/images/caseStudies/img_imageClassificationMobile@2x.webp';
import ReplacingFacesLogo from '@/images/caseStudies/img_replacingFacesLogo.webp';
import ReplacingFacesBg from '@/images/caseStudies/img_replacingFaces@2x.webp';
import ReplacingFacesTabletBg from '@/images/caseStudies/img_replacingFacesTablet@2x.webp';
import ReplacingFacesMobileBg from '@/images/caseStudies/img_replacingFacesMobile@2x.webp';
import AdoricLogo from '@/images/caseStudies/img_adoricLogo.webp';
import Adoric1Bg from '@/images/caseStudies/img_adoric1Bg@2x.webp';
import Adoric1TabletBg from '@/images/caseStudies/img_adoric1TabletBg@2x.webp';
import Adoric1MobileBg from '@/images/caseStudies/img_adoric1MobileBg@2x.webp';
import Adoric2Bg from '@/images/caseStudies/img_adoric2Bg@2x.webp';
import Adoric2TabletBg from '@/images/caseStudies/img_adoric2TabletBg@2x.webp';
import Adoric2MobileBg from '@/images/caseStudies/img_adoric2MobileBg@2x.webp';
import ManiLogo from '@/images/caseStudies/img_maniLogo.webp';
import ManiBg from '@/images/caseStudies/img_maniBg@2x.webp';
import ManiTabletBg from '@/images/caseStudies/img_maniTabletBg@2x.webp';
import ManiMobileBg from '@/images/caseStudies/img_maniMobileBg@2x.webp';
import UnrealSpaceLogo from '@/images/caseStudies/img_unrealSpaceLogo.webp';
import UnrealSpaceBg from '@/images/caseStudies/img_unrealSpaceBg@2x.webp';
import UnrealSpaceTabletBg from '@/images/caseStudies/img_unrealSpaceTabletBg@2x.webp';
import UnrealSpaceMobileBg from '@/images/caseStudies/img_unrealSpaceMobileBg@2x.webp';
import ConstructionLogo from '@/images/caseStudies/img_constructionLogo.webp';
import ConstructionBg from '@/images/caseStudies/img_constructionBg@2x.webp';
import ConstructionTabletBg from '@/images/caseStudies/img_constructionTabletBg@2x.webp';
import ConstructionMobileBg from '@/images/caseStudies/img_constructionMobileBg@2x.webp';
import ApplicationAWSLogo from '@/images/caseStudies/img_applicationAWSLogo.webp';
import ApplicationAWSBg from '@/images/caseStudies/img_applicationAWSBg@2x.webp';
import ApplicationAWSTabletBg from '@/images/caseStudies/img_applicationAWSTabletBg@2x.webp';
import ApplicationAWSMobileBg from '@/images/caseStudies/img_applicationAWSMobileBg@2x.webp';
import InfrastructureLogo from '@/images/caseStudies/img_infrastructureLogo.webp';
import InfrastructureBg from '@/images/caseStudies/img_infrastructureBg@2x.webp';
import InfrastructureTabletBg from '@/images/caseStudies/img_infrastructureTabletBg@2x.webp';
import InfrastructureMobileBg from '@/images/caseStudies/img_infrastructureMobileBg@2x.webp';
import WordPressLogo from '@/images/caseStudies/img_wordPressLogo.webp';
import WordPressBg from '@/images/caseStudies/img_wordPressBg@2x.webp';
import WordPressTabletBg from '@/images/caseStudies/img_wordPressTabletBg@2x.webp';
import WordPressMobileBg from '@/images/caseStudies/img_wordPressMobileBg@2x.webp';
import DsmLogo from '@/images/caseStudies/img_dsmLogo.webp';
import DsmBg from '@/images/caseStudies/img_dsmBg@2x.webp';
import DsmTabletBg from '@/images/caseStudies/img_dsmTabletBg@2x.webp';
import DsmMobileBg from '@/images/caseStudies/img_dsmMobileBg@2x.webp';
import AumoLogo from '@/images/caseStudies/img_aumoLogo.webp';
import AumoBg from '@/images/caseStudies/img_aumoBg@2x.webp';
import AumoTabletBg from '@/images/caseStudies/img_aumoTabletBg@2x.webp';
import AumoMobileBg from '@/images/caseStudies/img_aumoMobileBg@2x.webp';
import HunterLogo from '@/images/caseStudies/img_hunterLogo.webp';
import HunterBg from '@/images/caseStudies/img_hunterBg@2x.webp';
import HunterTabletBg from '@/images/caseStudies/img_hunterTabletBg@2x.webp';
import HunterMobileBg from '@/images/caseStudies/img_hunterMobileBg@2x.webp';
import FaynoLogo from '@/images/caseStudies/faynoMarket/img_faynoLogo.webp';
import FaynoBg from '@/images/caseStudies/faynoMarket/img_faynoBg.webp';
import FaynoTabletBg from '@/images/caseStudies/faynoMarket/img_faynoBgTablet.webp';
import FaynoMobileBg from '@/images/caseStudies/faynoMarket/img_faynoBgMobile.webp';
import LearningpoolLogo from '@/images/caseStudies/img_learningpoolLogo.webp';
import LearningpoolBg from '@/images/caseStudies/img_learningpoolBg@2x.webp';
import LearningpoolTabletBg from '@/images/caseStudies/img_learningpoolTabletBg@2x.webp';
import LearningpoolMobileBg from '@/images/caseStudies/img_learningpoolMobileBg@2x.webp';
import TimescopeLogo from '@/images/caseStudies/img_timescopeLogo.webp';
import TimescopeBg from '@/images/caseStudies/img_timescopeBg@2x.webp';
import TimescopeTabletBg from '@/images/caseStudies/img_timescopeTabletBg@2x.webp';
import TimescopeMobileBg from '@/images/caseStudies/img_timescopeMobileBg@2x.webp';
import HolokitLogo from '@/images/caseStudies/img_holokitLogo.webp';
import HolokitBg from '@/images/caseStudies/img_holokitBg@2x.webp';
import HolokitTabletBg from '@/images/caseStudies/img_holokitTabletBg@2x.webp';
import HolokitMobileBg from '@/images/caseStudies/img_holokitMobileBg@2x.webp';
import ConvertLogo from '@/images/caseStudies/img_convertLogo.webp';
import ConvertBg from '@/images/caseStudies/img_convertBg@2x.webp';
import ConvertTabletBg from '@/images/caseStudies/img_convertTabletBg@2x.webp';
import ConvertMobileBg from '@/images/caseStudies/img_convertMobileBg@2x.webp';
import KeybokLogo from '@/images/caseStudies/cryptocurrencyBlog/img_keybokLogo.webp';
import CryptocurrencyBlogBg from '@/images/caseStudies/cryptocurrencyBlog/img_cryptocurrencyBlogBg.webp';
import CryptocurrencyBlogTabletBg from '@/images/caseStudies/cryptocurrencyBlog/img_cryptocurrencyBlogBgTablet.webp';
import CryptocurrencyBlogMobileBg from '@/images/caseStudies/cryptocurrencyBlog/img_cryptocurrencyBlogBgMobile.webp';
import CryptocurrencyLogo from '@/images/caseStudies/img_cryptocurrencyLogo.webp';
import CryptocurrencyBg from '@/images/caseStudies/img_cryptocurrencyBg@2x.webp';
import CryptocurrencyTabletBg from '@/images/caseStudies/img_cryptocurrencyTabletBg@2x.webp';
import CryptocurrencyMobileBg from '@/images/caseStudies/img_cryptocurrencyMobileBg@2x.webp';
import GameMeLogo from '@/images/caseStudies/img_gameMeLogo@2x.webp';
import GameMeBg from '@/images/caseStudies/img_gameMeBg@2x.webp';
import GameMeTabletBg from '@/images/caseStudies/img_gameMeTabletBg@2x.webp';
import GameMeMobileBg from '@/images/caseStudies/img_gameMeMobileBg@2x.webp';
import BracketologyLogo from '@/images/caseStudies/img_bracketologyLogo.webp';
import BracketologyBg from '@/images/caseStudies/img_bracketologyBg@2x.webp';
import BracketologyTabletBg from '@/images/caseStudies/img_bracketologyTabletBg@2x.webp';
import BracketologyMobileBg from '@/images/caseStudies/img_bracketologyMobileBg@2x.webp';
import NowWhatLogo from '@/images/caseStudies/img_nowWhatLogo.webp';
import NowWhatBg from '@/images/caseStudies/img_nowWhatBg@2x.webp';
import NowWhatTabletBg from '@/images/caseStudies/img_nowWhatTabletBg@2x.webp';
import NowWhatMobileBg from '@/images/caseStudies/img_nowWhatMobileBg@2x.webp';
import SalesforceAppLogo from '@/images/caseStudies/img_salesforceAppLogo.webp';
import SalesforceAppBg from '@/images/caseStudies/img_salesforceAppBg@2x.webp';
import SalesforceAppTabletBg from '@/images/caseStudies/img_salesforceAppTabletBg@2x.webp';
import SalesforceAppMobileBg from '@/images/caseStudies/img_salesforceAppMobileBg@2x.webp';
import SchedulerLogo from '@/images/caseStudies/img_schedulerLogo.webp';
import SchedulerBg from '@/images/caseStudies/img_schedulerBg@2x.webp';
import SchedulerTabletBg from '@/images/caseStudies/img_schedulerTabletBg@2x.webp';
import SchedulerMobileBg from '@/images/caseStudies/img_schedulerMobileBg@2x.webp';
import PersonalAssistLogo from '@/images/caseStudies/img_personalAssistLogo.webp';
import PersonalAssistBg from '@/images/caseStudies/img_personalAssistBg@2x.webp';
import PersonalAssistTabletBg from '@/images/caseStudies/img_personalAssistTabletBg@2x.webp';
import PersonalAssistMobileBg from '@/images/caseStudies/img_personalAssistMobileBg@2x.webp';
import HaasLogo from '@/images/caseStudies/img_haasLogo.webp';
import HaasBg from '@/images/caseStudies/img_haasBg@2x.webp';
import HaasTabletBg from '@/images/caseStudies/img_haasTabletBg@2x.webp';
import HaasMobileBg from '@/images/caseStudies/img_haasMobileBg@2x.webp';
import ShowerLogo from '@/images/caseStudies/shower/img_showerLogo.webp';
import ShowerBg from '@/images/caseStudies/shower/img_showerBg.webp';
import ShowerTabletBg from '@/images/caseStudies/shower/img_showerTabletBg.webp';
import ShowerMobileBg from '@/images/caseStudies/shower/img_showerMobileBg.webp';
import OnixArLogo from '@/images/caseStudies/img_onixArLogo.webp';
import OnixArBg from '@/images/caseStudies/img_onixArBg@2x.webp';
import OnixArTabletBg from '@/images/caseStudies/img_onixArTabletBg@2x.webp';
import OnixArMobileBg from '@/images/caseStudies/img_onixArMobileBg@2x.webp';
import VolkswagenLogo from '@/images/caseStudies/img_volkswagenLogo.webp';
import VolkswagenBg from '@/images/caseStudies/img_volkswagenBg@2x.webp';
import VolkswagenTabletBg from '@/images/caseStudies/img_volkswagenTabletBg@2x.webp';
import VolkswagenMobileBg from '@/images/caseStudies/img_volkswagenMobileBg@2x.webp';
import ChinEasyLogo from '@/images/caseStudies/img_chinEasyLogo.webp';
import ChinEasyBg from '@/images/caseStudies/img_chinEasyBg@2x.webp';
import ChinEasyTabletBg from '@/images/caseStudies/img_chinEasyTabletBg@2x.webp';
import ChinEasyMobileBg from '@/images/caseStudies/img_chinEasyMobileBg@2x.webp';
import LstmLogo from '@/images/caseStudies/img_lstmLogo.webp';
import LstmBg from '@/images/caseStudies/img_lstmBg@2x.webp';
import LstmTabletBg from '@/images/caseStudies/img_lstmTabletBg@2x.webp';
import LstmMobileBg from '@/images/caseStudies/img_lstmMobileBg@2x.webp';
import MotionDesignLogo from '@/images/caseStudies/img_motionDesignLogo.webp';
import MotionDesignBg from '@/images/caseStudies/img_motionDesignBg@2x.webp';
import MotionDesignTabletBg from '@/images/caseStudies/img_motionDesignTabletBg@2x.webp';
import MotionDesignMobileBg from '@/images/caseStudies/img_motionDesignMobileBg@2x.webp';
import NestbLogo from '@/images/caseStudies/img_nestbLogo.webp';
import NestbBg from '@/images/caseStudies/img_nestbBg@2x.webp';
import NestbTabletBg from '@/images/caseStudies/img_nestbTabletBg@2x.webp';
import NestbMobileBg from '@/images/caseStudies/img_nestbMobileBg@2x.webp';
import SpaceInfoLogo from '@/images/caseStudies/img_spaceInfoLogo.webp';
import SpaceInfoBg from '@/images/caseStudies/img_spaceInfoBg@2x.webp';
import SpaceInfoTabletBg from '@/images/caseStudies/img_spaceInfoTabletBg@2x.webp';
import SpaceInfoMobileBg from '@/images/caseStudies/img_spaceInfoMobileBg@2x.webp';
import PhotoWhyLogo from '@/images/caseStudies/img_photoWhyLogo.webp';
import PhotoWhyBg from '@/images/caseStudies/img_photoWhyBg@2x.webp';
import PhotoWhyTabletBg from '@/images/caseStudies/img_photoWhyTabletBg@2x.webp';
import PhotoWhyMobileBg from '@/images/caseStudies/img_photoWhyMobileBg@2x.webp';
import JsaLogo from '@/images/caseStudies/img_jsaLogo.webp';
import JsaBg from '@/images/caseStudies/img_jsaBg@2x.webp';
import JsaTabletBg from '@/images/caseStudies/img_jsaTabletBg@2x.webp';
import JsaMobileBg from '@/images/caseStudies/img_jsaMobileBg@2x.webp';
import MiPaddleLogo from '@/images/caseStudies/img_miPaddleLogo.webp';
import MiPaddleBg from '@/images/caseStudies/img_miPaddleBg@2x.webp';
import MiPaddleTabletBg from '@/images/caseStudies/img_miPaddleTabletBg@2x.webp';
import MiPaddleMobileBg from '@/images/caseStudies/img_miPaddleMobileBg@2x.webp';
import ClubhouseLogo from '@/images/caseStudies/img_clubhouseLogo.webp';
import ClubhouseBg from '@/images/caseStudies/img_clubhouseBg@2x.webp';
import ClubhouseTabletBg from '@/images/caseStudies/img_clubhouseTabletBg@2x.webp';
import ClubhouseMobileBg from '@/images/caseStudies/img_clubhouseMobileBg@2x.webp';
import ColoradoLogo from '@/images/caseStudies/img_coloradoLogo.webp';
import ColoradoBg from '@/images/caseStudies/img_coloradoBg@2x.webp';
import ColoradoTabletBg from '@/images/caseStudies/img_coloradoTabletBg@2x.webp';
import ColoradoMobileBg from '@/images/caseStudies/img_coloradoMobileBg@2x.webp';
import BsteverLogo from '@/images/caseStudies/img_bsteverLogo.webp';
import BsteverBg from '@/images/caseStudies/img_bsteverBg@2x.webp';
import BsteverTabletBg from '@/images/caseStudies/img_bsteverTabletBg@2x.webp';
import BsteverMobileBg from '@/images/caseStudies/img_bsteverMobileBg@2x.webp';
import BetterMeLogo from '@/images/caseStudies/img_betterMeLogo.webp';
import BetterMeBg from '@/images/caseStudies/img_betterMeBg@2x.webp';
import BetterMeTabletBg from '@/images/caseStudies/img_betterMeTabletBg@2x.webp';
import BetterMeMobileBg from '@/images/caseStudies/img_betterMeMobileBg@2x.webp';
import StridistLogo from '@/images/caseStudies/img_stridistLogo.webp';
import StridistBg from '@/images/caseStudies/img_stridistBg@2x.webp';
import StridistTabletBg from '@/images/caseStudies/img_stridistTabletBg@2x.webp';
import StridistMobileBg from '@/images/caseStudies/img_stridistMobileBg@2x.webp';
import PhlexLogo from '@/images/caseStudies/img_phlexLogo.webp';
import PhlexBg from '@/images/caseStudies/img_phlexBg@2x.webp';
import PhlexTabletBg from '@/images/caseStudies/img_phlexTabletBg@2x.webp';
import PhlexMobileBg from '@/images/caseStudies/img_phlexMobileBg@2x.webp';
import VyraLogo from '@/images/caseStudies/img_vyraLogo.webp';
import VyraBg from '@/images/caseStudies/img_vyraBg@2x.webp';
import VyraTabletBg from '@/images/caseStudies/img_vyraTabletBg@2x.webp';
import VyraMobileBg from '@/images/caseStudies/img_vyraMobileBg@2x.webp';
import ProgressLogo from '@/images/caseStudies/img_progressLogo.webp';
import ProgressBg from '@/images/caseStudies/img_progressBg@2x.webp';
import ProgressTabletBg from '@/images/caseStudies/img_progressTabletBg@2x.webp';
import ProgressMobileBg from '@/images/caseStudies/img_progressMobileBg@2x.webp';
import BanskaStavnicaLogo from '@/images/caseStudies/img_banskaStavnicaLogo.webp';
import BanskaStavnicaBg from '@/images/caseStudies/img_banskaStavnicaBg@2x.webp';
import BanskaStavnicaTabletBg from '@/images/caseStudies/img_banskaStavnicaTabletBg@2x.webp';
import BanskaStavnicaMobileBg from '@/images/caseStudies/img_banskaStavnicaMobileBg@2x.webp';
import MisterbbLogo from '@/images/caseStudies/img_misterb&bLogo.webp';
import MisterbbBg from '@/images/caseStudies/img_misterb&bBg@2x.webp';
import MisterbbTabletBg from '@/images/caseStudies/img_misterb&bTabletBg@2x.webp';
import MisterbbMobileBg from '@/images/caseStudies/img_misterb&bMobileBg@2x.webp';
import AdventuresLogo from '@/images/caseStudies/img_adventuresLogo.webp';
import AdventuresBg from '@/images/caseStudies/img_adventuresBg@2x.webp';
import AdventuresTabletBg from '@/images/caseStudies/img_adventuresTabletBg@2x.webp';
import AdventuresMobileBg from '@/images/caseStudies/img_adventuresMobileBg@2x.webp';
import TravelbidLogo from '@/images/caseStudies/img_travelbidLogo.webp';
import TravelbidBg from '@/images/caseStudies/img_travelbidBg@2x.webp';
import TravelbidTabletBg from '@/images/caseStudies/img_travelbidTabletBg@2x.webp';
import TravelbidMobileBg from '@/images/caseStudies/img_travelbidMobileBg@2x.webp';
import OneTouchVRLogo from '@/images/caseStudies/img_oneTouchVRLogo.webp';
import OneTouchVRBg from '@/images/caseStudies/img_oneTouchVRBg@2x.webp';
import OneTouchVRTabletBg from '@/images/caseStudies/img_oneTouchVRTabletBg@2x.webp';
import OneTouchVRMobileBg from '@/images/caseStudies/img_oneTouchVRMobileBg@2x.webp';
import TrvlPageLogo from '@/images/caseStudies/img_trvlPageLogo.webp';
import TrvlPageBg from '@/images/caseStudies/img_trvlPageBg@2x.webp';
import TrvlPageTabletBg from '@/images/caseStudies/img_trvlPageTabletBg@2x.webp';
import TrvlPageMobileBg from '@/images/caseStudies/img_trvlPageMobileBg@2x.webp';
import SwitzerlandLogo from '@/images/caseStudies/img_switzerlandLogo.webp';
import SwitzerlandBg from '@/images/caseStudies/img_switzerlandBg@2x.webp';
import SwitzerlandTabletBg from '@/images/caseStudies/img_switzerlandTabletBg@2x.webp';
import SwitzerlandMobileBg from '@/images/caseStudies/img_switzerlandMobileBg@2x.webp';
import GolfLiveLogo from '@/images/caseStudies/img_golfLiveLogo.webp';
import GolfLiveBg from '@/images/caseStudies/img_golfLiveBg.webp';
import GolfLiveBgTablet from '@/images/caseStudies/img_golfLiveBg_tablet.webp';
import GolfLiveBgMobile from '@/images/caseStudies/img_golfLiveBg_mobile.webp';
import SolomiyaLogo from '@/images/caseStudies/img_solomiyaLogo.webp';
import SolomiyaBg from '@/images/caseStudies/img_solomiyaBg@2x.webp';
import SolomiyaTabletBg from '@/images/caseStudies/img_solomiyaTabletBg@2x.webp';
import SolomiyaMobileBg from '@/images/caseStudies/img_solomiyaMobileBg@2x.webp';
import TravelTailLogo from '@/images/caseStudies/img_travelTailLogo.webp';
import TravelTailBg from '@/images/caseStudies/img_travelTailBg@2x.webp';
import TravelTailTabletBg from '@/images/caseStudies/img_travelTailTabletBg@2x.webp';
import TravelTailMobileBg from '@/images/caseStudies/img_travelTailMobileBg@2x.webp';
import ApartmentRentalBg from '@/images/caseStudies/img_ApartmentRental.webp';
import ApartmentRentalTabletBg from '@/images/caseStudies/img_ApartmentRentalTablet.webp';
import ApartmentRentalMobileBg from '@/images/caseStudies/img_ApartmentRentalMobile.webp';
import ApartmentRentalLogo from '@/images/caseStudies/img_apartmentRentalLogo.webp';
import CustomCRMBg from '@/images/caseStudies/img_CustomCRM@2x.webp';
import CustomCRMTabletBg from '@/images/caseStudies/img_CustomCRMTablet@2x.webp';
import CustomCRMMobileBg from '@/images/caseStudies/img_CustomCRMMobile@2x.webp';
import CustomCRMLogo from '@/images/caseStudies/img_CustomCRMLogo.webp';
import MetroBg from '@/images/caseStudies/img_Metro.webp';
import MetroTabletBg from '@/images/caseStudies/img_MetroTablet.webp';
import MetroMobileBg from '@/images/caseStudies/img_MetroMobile.webp';
import MetroLogo from '@/images/caseStudies/img_MetroLogo.webp';
import ModelAptBg from '@/images/caseStudies/img_ModelAptBg@2x.webp';
import ModelAptTabletBg from '@/images/caseStudies/img_ModelAptTabletBg@2x.webp';
import ModelAptMobileBg from '@/images/caseStudies/img_ModelAptMobileBg@2x.webp';
import ModelAptLogo from '@/images/caseStudies/img_ModelAptLogo.webp';
import NibulonBg from '@/images/caseStudies/img_NibulonBg@2x.webp';
import NibulonTabletBg from '@/images/caseStudies/img_NibulonTabletBg@2x.webp';
import NibulonMobileBg from '@/images/caseStudies/img_NibulonMobileBg@2x.webp';
import NibulonLogo from '@/images/caseStudies/img_NibulonLogo.webp';
import LivboxBg from '@/images/caseStudies/livbox/img_livboxBg.webp';
import LivboxBgTablet from '@/images/caseStudies/livbox/img_livboxBgTablet.webp';
import LivboxBgMobile from '@/images/caseStudies/livbox/img_livboxBgMobile.webp';
import LivboxLogo from '@/images/caseStudies/livbox/img_livboxLogo.webp';
import AnijaManorBg from '@/images/caseStudies/anijaManor/img_anijaManorBg.webp';
import AnijaManorBgTablet from '@/images/caseStudies/anijaManor/img_anijaManorBgTablet.webp';
import AnijaManorBgMobile from '@/images/caseStudies/anijaManor/img_anijaManorBgMobile.webp';
import AnijaManorLogo from '@/images/caseStudies/anijaManor/img_anijaManorLogo.webp';
import KozystayBg from '@/images/caseStudies/kozystay/img_kozystayBg.webp';
import KozystayBgTablet from '@/images/caseStudies/kozystay/img_kozystayBgTablet.webp';
import KozystayBgMobile from '@/images/caseStudies/kozystay/img_kozystayBgMobile.webp';
import KozystayLogo from '@/images/caseStudies/kozystay/img_kozystayLogo.webp';
import SaviiBg from '@/images/caseStudies/savii/img_saviiBg.webp';
import SaviiBgTablet from '@/images/caseStudies/savii/img_saviiBgTablet.webp';
import SaviiBgMobile from '@/images/caseStudies/savii/img_saviiBgMobile.webp';
import SaviiLogo from '@/images/caseStudies/savii/img_saviiLogo.webp';
import AnalyticsBg from '@/images/caseStudies/analytics/img_analyticsBg.webp';
import AnalyticsBgTablet from '@/images/caseStudies/analytics/img_analyticsBgTablet.webp';
import AnalyticsBgMobile from '@/images/caseStudies/analytics/img_analyticsBgMobile.webp';
import AnalyticsLogo from '@/images/caseStudies/analytics/img_analyticsLogo.webp';
import GolfVideoBg from '@/images/caseStudies/img_golfCaseStudyVideoBg@2x.webp';
import GolfVideoBgTablet from '@/images/caseStudies/img_golfCaseStudyVideoTabletBg@2x.webp';
import GolfVideoBgMobile from '@/images/caseStudies/img_golfCaseStudyVideoMobileBg@2x.webp';
import GolfVideoLogo from '@/images/caseStudies/img_golfCaseStudyVideoLogo@2x.webp';
import VyraVideoLogo from '@/images/caseStudies/img_vyraVideoLogo@2x.webp';
import VyraVideoBg from '@/images/caseStudies/img_vyraVideoBg@2x.webp';
import VyraVideoBgTablet from '@/images/caseStudies/img_vyraVideoTabletBg@2x.webp';
import VyraVideoBgMobile from '@/images/caseStudies/img_vyraVideoMobileBg@2x.webp';
import PhlexVideoLogo from '@/images/caseStudies/img_phlexVideoLogo@2x.webp';
import PhlexVideoBg from '@/images/caseStudies/img_phlexVideoBg@2x.webp';
import PhlexVideoBgTablet from '@/images/caseStudies/img_phlexVideoTabletBg@2x.webp';
import PhlexVideoBgMobile from '@/images/caseStudies/img_phlexVideoMobileBg@2x.webp';
import AdoricVideoLogo from '@/images/caseStudies/img_adoricVideoLogo@2x.webp';
import AdoricVideoBg from '@/images/caseStudies/img_adoricVideoBg@2x.webp';
import AdoricVideoBgTablet from '@/images/caseStudies/img_adoricVideoTabletBg@2x.webp';
import AdoricVideoBgMobile from '@/images/caseStudies/img_adoricVideoMobileBg@2x.webp';
import ProductScopeLogoSmall from '@/images/caseStudies/img_productScopeLogoSmall.webp';
import HCPLogo from '@/images/caseStudies/img_HCP_Logo.webp';
import HCPBg from '@/images/caseStudies/img_HCP_bg.webp';
import HCPBgTablet from '@/images/caseStudies/img_HCP_bg_tablet.webp';
import HCPBgMobile from '@/images/caseStudies/img_HCP_bg_mobile.webp';

export const caseStudiesData: ICaseStudiesData[] = [
  {
    id: 1,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_1"
      icon={AdoricLogo}
      logoSizes={{
        lg: {
          width: 230,
          height: 50,
        },
        sm: {
          width: 140,
          height: 30,
        },
      }}
      img={{
        sm: Adoric1MobileBg,
        md: Adoric1TabletBg,
        lg: Adoric1Bg,
      }}
      description={(
        <>
          Unobtrusive SaaS product
          <br />
          {' '}
          for setting up marketing campaigns
        </>
      )}
      title="SaaS marketing product for growing web conversion"
      subTitle="Unobtrusive SaaS product for setting up marketing campaigns"
      text="We delivered a solution with customizable lightbox creation, real-time event
       tracking, seamless integration & AI-powered tailored product suggestions"
      data={['Israel', 'Advertising']}
      cucumberVariant
      url={PageLinks.SAAS_MARKETING_PLATFORM_CASE_STUDY}
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 2,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_2"
      icon={AdoricLogo}
      logoSizes={{
        lg: {
          width: 230,
          height: 50,
        },
        sm: {
          width: 140,
          height: 30,
        },
      }}
      img={{
        sm: Adoric2MobileBg,
        md: Adoric2TabletBg,
        lg: Adoric2Bg,
      }}
      description={(
        <>
          Adoric is a SaaS product designed
          <br />
          {' '}
          for digital marketers to optimize
          <br />
          {' '}
          websites
        </>
      )}
      title="SaaS platform engagement through usability testing"
      subTitle="Adoric is a SaaS product designed for digital marketers to optimize websites"
      text={(
        <>
          Onix conducted comprehensive usability testing, developed innovative branding scanner
          technology for template relevance,
          {' '}
          <span className="inline_block">and improved</span>
          {' '}
          template usage
        </>
      )}
      data={['Israel', 'Advertising']}
      cucumberVariant
      url={PageLinks.USABILITY_TESTING_DESIGN_CASE_STUDY}
    />,
  },
  {
    id: 3,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_3"
      icon={ImageClassificationLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 31,
        },
        sm: {
          width: 213,
          height: 21,
        },
      }}
      img={{
        sm: ImageClassificationMobileBg,
        md: ImageClassificationTabletBg,
        lg: ImageClassificationBg,
      }}
      description={(
        <>
          Image Analysis that uses unique
          <br />
          {' '}
          capabilities of the Intel Neural
          <br />
          {' '}
          Compute Stick 2
        </>
      )}
      title={(
        <>
          Software solution
          {' '}
          <span className="inline_block">with real-time</span>
          {' '}
          image analysis
        </>
      )}
      subTitle="Image Analysis that uses unique capabilities of the Intel Neural Compute Stick 2"
      text="We built software that offers real-time image classification and analysis,
       eliminating delays experienced with cloud-based solutions"
      data={['Ukraine', 'Automatic Electric Drive']}
      cucumberVariant
      headerVariant
      url={PageLinks.AI_IMAGE_CLASSIFICATION_SOLUTION_CASE_STUDY}
    />,
  },
  {
    id: 4,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_4"
      icon={ProductScopeLogo}
      logoSizes={{
        lg: {
          width: 252,
          height: 30,
        },
        sm: {
          width: 170,
          height: 20,
        },
      }}
      img={{
        sm: ProductScopeMobileBg,
        md: ProductScopeTabletBg,
        lg: ProductScopeBg,
      }}
      description={(
        <>
          AI-powered iOS app that allows
          <br />
          {' '}
          consumers to easily find safe beauty
          <br />
          {' '}
          products
        </>
      )}
      title="AI-powered iOS app for cosmetics & beauty industry"
      subTitle="AI-powered iOS app that allows consumers to easily find safe beauty products"
      text={(
        <>
          We developed an iOS skincare app with
          {' '}
          <span className="inline_block">an intuitive</span>
          {' '}
          admin panel, robust security,
          AI-driven recommendations,
          {' '}
          <span className="inline_block">and a</span>
          {' '}
          vast ingredient database powered by ML
        </>
      )}
      data={['USA', 'Beauty, Cosmetics']}
      cucumberVariant
      url={PageLinks.COSMETICS_ANALYSIS_AI_APP_CASE_STUDY}
    />,
  },
  {
    id: 5,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_5"
      icon={ManiLogo}
      logoSizes={{
        lg: {
          width: 151,
          height: 46,
        },
        sm: {
          width: 104,
          height: 31,
        },
      }}
      img={{
        sm: ManiMobileBg,
        md: ManiTabletBg,
        lg: ManiBg,
      }}
      description={(
        <>
          Mani is a user-friendly
          <br />
          {' '}
          cross-platform solution for booking
          <br />
          {' '}
          beauty services
        </>
      )}
      title="Enhancing beauty service booking with improved UX"
      subTitle="Mani is a user-friendly cross-platform solution for booking beauty services"
      text="Onix offered end-to-end design solution, enhancing UX through intuitive user flows,
       wireframes, prototypes, and appealing mobile-friendly interfaces"
      data={['USA', 'Beauty']}
      url={PageLinks.BEAUTY_BOOKING_SERVICES_DESIGN_CASE_STUDY}
      cucumberVariant
      eyeBlackStyleMobile
    />,
  },
  {
    id: 6,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_6"
      icon={UnrealSpaceLogo}
      logoSizes={{
        lg: {
          width: 256,
          height: 38,
        },
        sm: {
          width: 150,
          height: 22,
        },
      }}
      img={{
        sm: UnrealSpaceMobileBg,
        md: UnrealSpaceTabletBg,
        lg: UnrealSpaceBg,
      }}
      description={(
        <>
          Virtual office to book conference halls
          <br />
          {' '}
          in a VR environment
        </>
      )}
      title={(
        <>
          Virtual space for immersive meetings
          {' '}
          <span className="inline_block">& presentations</span>

        </>
      )}
      subTitle={(
        <>
          Virtual office to book conference halls in
          {' '}
          <span className="inline_block">a VR</span>
          {' '}
          environment
        </>
      )}
      text={(
        <>
          We offered end-to-end VR development, created
          {' '}
          <span className="inline_block">a seamless</span>
          {' '}
          coworking with realistic graphics, gesture-controlled interactions & smooth desktop streaming
        </>
      )}
      data={['Germany', 'Communication']}
      url={PageLinks.UNREAL_SPACE}
      cucumberVariant
    />,
  },
  {
    id: 7,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_7"
      icon={ConstructionLogo}
      logoSizes={{
        lg: {
          width: 315,
          height: 40,
        },
        sm: {
          width: 209,
          height: 23,
        },
      }}
      img={{
        sm: ConstructionMobileBg,
        md: ConstructionTabletBg,
        lg: ConstructionBg,
      }}
      description={(
        <>
          Revolutionizing trainings with
          <br />
          {' '}
          immersive VR simulations to increase
          <br />
          {' '}
          staff safety
        </>
      )}
      title={(
        <>
          VR simulation
          {' '}
          <span className="inline_block">for the skyscraper</span>
          {' '}
          construction site
        </>
      )}
      subTitle="Revolutionizing trainings with immersive VR simulations to increase staff safety"
      text={(
        <>
          We offered VR simulation development, realistic graphics, interactive scenarios,
          {' '}
          <span className="inline_block">and gesture-</span>
          controlled interactions for construction training
        </>
      )}
      data={['Singapore', 'Construction']}
      url={PageLinks.CONSTRUCTION_VR_MR}
    />,
  },
  {
    id: 8,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_8"
      icon={ApplicationAWSLogo}
      logoSizes={{
        lg: {
          width: 251,
          height: 60,
        },
        sm: {
          width: 168,
          height: 40,
        },
      }}
      img={{
        sm: ApplicationAWSMobileBg,
        md: ApplicationAWSTabletBg,
        lg: ApplicationAWSBg,
      }}
      description={(
        <>
          Enhancing server performance
          <br />
          {' '}
          and flexibility through infrastructure
          <br />
          {' '}
          migration
        </>
      )}
      title={(
        <>
          Migration from heroku to AWS quickly
          {' '}
          <span className="inline_block">and smoothly</span>
        </>
      )}
      subTitle="Enhancing server performance and flexibility through infrastructure migration"
      text={(
        <>
          Onix provided Webflow minimalistic website design and development services,
          including concept creation, user-centric design,
          {' '}
          <span className="inline_block">and content</span>
          {' '}
          integration
        </>
      )}
      data={['DevOps']}
      url={PageLinks.APPLICATION_MIGRATION_FROM_HEROKU_TO_AWS_CASE_STUDY}
    />,
  },
  {
    id: 9,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_9"
      icon={InfrastructureLogo}
      logoSizes={{
        lg: {
          width: 249,
          height: 60,
        },
        sm: {
          width: 168,
          height: 40,
        },
      }}
      img={{
        sm: InfrastructureMobileBg,
        md: InfrastructureTabletBg,
        lg: InfrastructureBg,
      }}
      description={(
        <>
          Ensuring efficient resource usage
          <br />
          {' '}
          and enhanced performance by dockerizing
          <br />
          {' '}
          apps
        </>
      )}
      title="Project infrastructure optimization to reduce costs"
      subTitle="Ensuring efficient resource usage and enhanced performance by dockerizing apps"
      text={(
        <>
          We offered a detailed analysis of architecture, strategic updates, dockerization, database consolidation,
          {' '}
          <span className="inline_block">and setted</span>
          {' '}
          up backup for system resilience
        </>
      )}
      data={['DevOps']}
      url={PageLinks.COST_OPTIMIZATION_OF_PROJECT_INFRASTRUCTURE_CASE_STUDY}
    />,
  },
  {
    id: 10,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_10"
      icon={WordPressLogo}
      logoSizes={{
        lg: {
          width: 332,
          height: 60,
        },
        sm: {
          width: 168,
          height: 40,
        },
      }}
      img={{
        sm: WordPressMobileBg,
        md: WordPressTabletBg,
        lg: WordPressBg,
      }}
      description={(
        <>
          Using Kubernetes to improve a growing
          <br />
          {' '}
          online magazine&apos;s resilience
          <br />
          {' '}
          & performance
        </>
      )}
      title="Deploying WordPress On Kubernetes utilizing gitlab"
      subTitle="Using Kubernetes to improve a growing online magazine's resilience & performance"
      text={(
        <>
          Our DevOps services improved site&apos;s infrastructure, optimizing resource management,
          scalability
          {' '}
          <span className="inline_block">& UX,</span>
          {' '}
          cutting costs for efficient WordPress operation
        </>
      )}
      data={['USA', 'DevOps']}
      url={PageLinks.DEPLOYING_WORDPRESS_ON_KUBERNETES_CASE_STUDY}
    />,
  },
  {
    id: 11,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_11"
      icon={DsmLogo}
      logoSizes={{
        lg: {
          width: 120,
          height: 40,
        },
        sm: {
          width: 61,
          height: 20,
        },
      }}
      img={{
        sm: DsmMobileBg,
        md: DsmTabletBg,
        lg: DsmBg,
      }}
      description={(
        <>
          DSM is learning app with VR
          <br />
          {' '}
          presentations on sustainable animal
          <br />
          {' '}
          farming practices
        </>
      )}
      title="360-Degree VR app to show animal protein production"
      subTitle="DSM is learning app with VR presentations on sustainable animal farming practices"
      text={(
        <>
          We built a set of VR apps on various platforms, prepared 360º and 2D user interfaces,
          provided realistic effects,
          {' '}
          <span className="inline_block">and created</span>
          {' '}
          a set of templates
        </>
      )}
      data={['Netherlands', 'Ecology']}
      cucumberVariant
      url={PageLinks.UNITY_DSM}
    />,
  },
  {
    id: 12,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_12"
      icon={AumoLogo}
      logoSizes={{
        lg: {
          width: 187,
          height: 38,
        },
        sm: {
          width: 118,
          height: 24,
        },
      }}
      img={{
        sm: AumoMobileBg,
        md: AumoTabletBg,
        lg: AumoBg,
      }}
      description={(
        <>
          Dynamic e-commerce website with
          <br />
          {' '}
          creative animations and performance
          <br />
          {' '}
          optimization
        </>
      )}
      title="The concept of shell chair website design on webflow"
      subTitle={(
        <>
          Dynamic e-commerce website with creative animations
          {' '}
          <span className="inline_block">and performance</span>
          {' '}
          optimization
        </>
      )}
      text={(
        <>
          Onix provided Webflow minimalistic website design
          {' '}
          <span className="inline_block">and development</span>
          {' '}
          services, including concept creation, user-centric design,
          {' '}
          <span className="inline_block">and content</span>
          {' '}
          integration
        </>
      )}
      data={['Ukraine', 'E-commerce']}
      url={PageLinks.WEBFLOW_WEBSITE_DESIGN_CASE_STUDY}
      eyeBlackStyle
    />,
  },
  {
    id: 13,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_13"
      icon={HunterLogo}
      logoSizes={{
        lg: {
          width: 216,
          height: 30,
        },
        sm: {
          width: 158,
          height: 22,
        },
      }}
      img={{
        sm: HunterMobileBg,
        md: HunterTabletBg,
        lg: HunterBg,
      }}
      description={(
        <>
          Hunter is an online store for military
          <br />
          {' '}
          and tactical goods with intuitive
          <br />
          {' '}
          design
        </>
      )}
      title="Custom design services for ecommerce platform"
      subTitle={(
        <>
          Hunter is an online store for military
          {' '}
          <span className="inline_block">and tactical</span>
          {' '}
          goods with intuitive design
        </>
      )}
      text="We offered end-to-end design services, including UI/UX design, navigation
       optimization, visual design implementation, responsive design & categorization"
      data={['USA', 'E-commerce']}
      url={PageLinks.HUNTER_ECOMMERCE_PLATFORM_DESIGN_CASE_STUDY}
    />,
  },
  {
    id: 14,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_14"
      icon={FaynoLogo}
      logoSizes={{
        lg: {
          width: 235,
          height: 60,
        },
        sm: {
          width: 156,
          height: 40,
        },
      }}
      img={{
        sm: FaynoMobileBg,
        md: FaynoTabletBg,
        lg: FaynoBg,
      }}
      qualityImg={92}
      description={(
        <>
          Fayno Market is a Ukrainian
          <br />
          {' '}
          “shops next door” supermarket chain
        </>
      )}
      title="Grocery app development"
      subTitle="Fayno Market is a Ukrainian “shops next door” supermarket chain"
      text={(
        <>
          Onix built iOS and Android grocery apps
          {' '}
          <span className="inline_block">and developed</span>
          {' '}
          <span className="inline_block">a database</span>
          {' '}
          for the marketing department
        </>
      )}
      data={['Ukraine', 'E-commerce']}
      url={PageLinks.FAYNO_MARKET_APP_CASE_STUDY}
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 15,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_15"
      icon={EdplusLogo}
      logoSizes={{
        lg: {
          width: 198,
          height: 50,
        },
        sm: {
          width: 132,
          height: 33,
        },
      }}
      img={{
        sm: EdplusMobileBg,
        md: EdplusTabletBg,
        lg: EdplusBg,
      }}
      description={(
        <>
          Edplus is an app with interactive
          <br />
          {' '}
          content, parental control, and unique
          <br />
          {' '}
          features
        </>
      )}
      title="Self-learning mobile app with app-locking feature"
      subTitle="Edplus is an app with interactive content, parental control, and unique features"
      text={(
        <>
          Onix developed
          {' '}
          <span className="inline_block">and integrated</span>
          {' '}
          educational
          {' '}
          <span className="inline_block">and app-locking</span>
          {' '}
          features for self-learning, merging React Native and Java components
        </>
      )}
      data={['UK', 'Education']}
      url={PageLinks.EDPLUS_STUDY_CASE}
      eyeBlackStyleMobile
    />,
  },
  {
    id: 16,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_16"
      icon={LearningpoolLogo}
      logoSizes={{
        lg: {
          width: 279,
          height: 60,
        },
        sm: {
          width: 166,
          height: 36,
        },
      }}
      img={{
        sm: LearningpoolMobileBg,
        md: LearningpoolTabletBg,
        lg: LearningpoolBg,
      }}
      description={(
        <>
          Learning Pool provides solutions
          <br />
          {' '}
          for creating and delivering e-learning
          <br />
          {' '}
          content
        </>
      )}
      title="Educational content and technology solutions"
      subTitle={(
        <>
          Learning Pool provides solutions for creating
          {' '}
          <span className="inline_block">and delivering</span>
          {' '}
          e-learning content
        </>
      )}
      text={(
        <>
          Onix worked on several
          {' '}
          <span className="inline_block">e-learning</span>
          {' '}
          projects, providing
          software development, support, testing, and analysis services
        </>
      )}
      data={['USA', 'Education']}
      cucumberVariant
      url={PageLinks.LEARNING_POOL}
    />,
  },
  {
    id: 17,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_17"
      icon={ReplacingFacesLogo}
      logoSizes={{
        lg: {
          width: 252,
          height: 33,
        },
        sm: {
          width: 163,
          height: 21,
        },
      }}
      img={{
        sm: ReplacingFacesMobileBg,
        md: ReplacingFacesTabletBg,
        lg: ReplacingFacesBg,
      }}
      description={(
        <>
          An animation software to ensure
          <br />
          {' '}
          seamless, comedic & realistic face
          <br />
          {' '}
          replacement
        </>
      )}
      title="AI-based solution to replace faces in video stream"
      subTitle="An animation software to ensure seamless, comedic & realistic face replacement"
      text="We crafted an AI-driven solution to replace faces in humorous videos, utilizing advanced
       face detection, dynamic object mapping & accessory augmentation"
      data={['Australia', 'Entertainment']}
      url={PageLinks.AI_FACE_REPLACING_SOLUTION_CASE_STUDY}
    />,
  },
  {
    id: 18,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_18"
      icon={TimescopeLogo}
      logoSizes={{
        lg: {
          width: 223,
          height: 40,
        },
        sm: {
          width: 136,
          height: 24,
        },
      }}
      img={{
        sm: TimescopeMobileBg,
        md: TimescopeTabletBg,
        lg: TimescopeBg,
      }}
      description={(
        <>
          Timescope is a VR app for viewing
          <br />
          {' '}
          antique photos that brings history to
          <br />
          {' '}
          life
        </>
      )}
      title={(
        <>
          VR app to explore
          {' '}
          <span className="inline_block">19th-century</span>
          {' '}
          stereoscope photos
        </>
      )}
      subTitle="Timescope is a VR app for viewing antique photos that brings history to life"
      text="We offered complex VR development across platforms, created a unique 3D environment
       with custom shaders, retouched photos & curated historical music"
      data={['USA', 'Entertainment']}
      url={PageLinks.TIMESCOPE}
    />,
  },
  {
    id: 19,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_19"
      icon={HolokitLogo}
      logoSizes={{
        lg: {
          width: 134,
          height: 30,
        },
        sm: {
          width: 109,
          height: 24,
        },
      }}
      img={{
        sm: HolokitMobileBg,
        md: HolokitTabletBg,
        lg: HolokitBg,
      }}
      description={(
        <>
          MR solution that enables users to place
          <br />
          {' '}
          virtual objects in the real world
        </>
      )}
      title="Mixed reality solution with content synchronization"
      subTitle="MR solution that enables users to place virtual objects in the real world"
      text="Onix crafted an open-source MR solution with low-cost components, integrating
       virtual objects into reality, with high-quality optics & robust support"
      data={['USA', 'Entertainment']}
      cucumberVariant
      url={PageLinks.MIXED_REALITY_HOLOKIT}
      eyeBlackStyleMobile
    />,
  },
  {
    id: 20,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_20"
      icon={ConvertLogo}
      logoSizes={{
        lg: {
          width: 216,
          height: 40,
        },
        sm: {
          width: 133,
          height: 24,
        },
      }}
      img={{
        sm: ConvertMobileBg,
        md: ConvertTabletBg,
        lg: ConvertBg,
      }}
      description={(
        <>
          Convert is an instant money transfer
          <br />
          {' '}
          iOS app to provide online banking
          <br />
          {' '}
          services
        </>
      )}
      title="Fintech app with features close to Revolut and Wise"
      subTitle="Convert is an instant money transfer iOS app to provide online banking services"
      text={(
        <>
          Onix provided full-cycle services, from setting up the dev process and creating
          {' '}
          <span className="inline_block">the mobile</span>
          {' '}
          app to delivering a functional MVP for demo purposes
        </>
      )}
      data={['Ukraine', 'Fintech']}
      cucumberVariant
      url={PageLinks.CONVERT_CASE_STUDY}
    />,
  },
  {
    id: 21,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_21"
      icon={KeybokLogo}
      logoSizes={{
        lg: {
          width: 181,
          height: 60,
        },
        sm: {
          width: 121,
          height: 40,
        },
      }}
      img={{
        sm: CryptocurrencyBlogMobileBg,
        md: CryptocurrencyBlogTabletBg,
        lg: CryptocurrencyBlogBg,
      }}
      qualityImg={93}
      description={(
        <>
          Decentralized cryptocurrency blog with
          <br />
          {' '}
          Polygon integration & MetaMask support
        </>
      )}
      title="Web3 blog with secure & transparent transactions"
      subTitle="Decentralized cryptocurrency blog with Polygon integration & MetaMask support"
      text="Onix provided end-to-end services including tokenization, efficient transaction handling
       via the Polygon network, and scalable architecture design"
      data={['Fintech']}
      cucumberVariant
      url={PageLinks.MOBILE_APP_KEYBOARD_CASE_STUDY}
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 22,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_22"
      icon={CryptocurrencyLogo}
      logoSizes={{
        lg: {
          width: 234,
          height: 60,
        },
        sm: {
          width: 156,
          height: 40,
        },
      }}
      img={{
        sm: CryptocurrencyMobileBg,
        md: CryptocurrencyTabletBg,
        lg: CryptocurrencyBg,
      }}
      description={(
        <>
          Decentralized app for crypto
          <br />
          {' '}
          enthusiasts & investors interested in
          <br />
          {' '}
          the NFT sector
        </>
      )}
      title="Cryptocurrency platform to transact with ethereum"
      subTitle={(
        <>
          Decentralized app for crypto enthusiasts
          {' '}
          <span className="inline_block">& investors</span>
          {' '}
          interested in the NFT sector
        </>
      )}
      text="Onix developed a user-friendly trading platform for lending protocols
       and loans, with multilanguage support, real-time updates, and personalization"
      data={['USA', 'Fintech']}
      url={PageLinks.CRYPTOCURRENCY_EXCHANGE_PLATFORM_CASE_STUDY}
    />,
  },
  {
    id: 23,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_23"
      icon={GameMeLogo}
      logoSizes={{
        lg: {
          width: 226,
          height: 32,
        },
        sm: {
          width: 151,
          height: 21,
        },
      }}
      img={{
        sm: GameMeMobileBg,
        md: GameMeTabletBg,
        lg: GameMeBg,
      }}
      description={(
        <>
          Brand transformation via integration of
          <br />
          {' '}
          a dark color scheme & interactive
          <br />
          {' '}
          elements
        </>
      )}
      title="Immersive Webflow website design for Game Me company"
      subTitle="Brand transformation via integration of a dark color scheme & interactive elements"
      text={(
        <>
          We provided web design
          {' '}
          <span className="inline_block">and development</span>
          {' '}
          services for a gaming production company, logo design, UI enhancements,
          ensuring optimal UX and responsiveness
        </>
      )}
      data={['USA', 'Gaming']}
      url={PageLinks.WEBFLOW_WEBSITE_DEVELOPMENT_AND_DESIGN_FOR_GAMING_PRODUCTION_COMPANY}
    />,
  },
  {
    id: 24,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_24"
      icon={BracketologyLogo}
      logoSizes={{
        lg: {
          width: 253,
          height: 60,
        },
        sm: {
          width: 151,
          height: 36,
        },
      }}
      img={{
        sm: BracketologyMobileBg,
        md: BracketologyTabletBg,
        lg: BracketologyBg,
      }}
      description={(
        <>
          Bracketology is a platform for reality
          <br />
          {' '}
          TV, turning its drama into
          <br />
          {' '}
          an online game
        </>
      )}
      title="Centralized fantasy gaming platform for reality TV shows"
      subTitle="Bracketology is a platform for reality TV, turning its drama into an online game"
      text={(
        <>
          The Onix team migrated
          {' '}
          <span className="inline_block">the app</span>
          {' '}
          to AWS
          {' '}
          <span className="inline_block">and delivered</span>
          {' '}
          a completely redesigned version, transforming
          {' '}
          <span className="inline_block">the old</span>
          {' '}
          website and app into
          {' '}
          <span className="inline_block">an innovative</span>
          {' '}
          platform
        </>
      )}
      data={['USA', 'Gaming']}
      url={PageLinks.BRACKETOLOGY_CASE_STUDY}
    />,
  },
  {
    id: 25,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_25"
      icon={NowWhatLogo}
      logoSizes={{
        lg: {
          width: 160,
          height: 51,
        },
        sm: {
          width: 107,
          height: 34,
        },
      }}
      img={{
        sm: NowWhatMobileBg,
        md: NowWhatTabletBg,
        lg: NowWhatBg,
      }}
      description={(
        <>
          NowWhat is a platform to share
          <br />
          {' '}
          experiences & provide support for
          <br />
          {' '}
          cancer patients
        </>
      )}
      title="Matchmaking platform to support cancer patients"
      subTitle="NowWhat is a platform to share experiences & provide support for cancer patients"
      text={(
        <>
          Onix ensured seamless development, including WordPress site setup, private portal creation,
          {' '}
          <span className="inline_block">and advanced</span>
          {' '}
          matching algorithm implementation
        </>
      )}
      data={['United Kingdom', 'Healthcare']}
      url={PageLinks.NOWWHAT_CASE_STUDY}
    />,
  },
  {
    id: 26,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_26"
      icon={DigitalHealthLogo}
      logoSizes={{
        lg: {
          width: 293,
          height: 60,
        },
        sm: {
          width: 196,
          height: 40,
        },
      }}
      img={{
        sm: DigitalHealthMobileBg,
        md: DigitalHealthTabletBg,
        lg: DigitalHealthBg,
      }}
      description={(
        <>
          White-label solution to enhance home-
          <br />
          {' '}
          based care for a digital health company
        </>
      )}
      title={(
        <>
          First-class platform
          {' '}
          <span className="inline_block">for patient</span>
          {' '}
          <span className="inline_block">self-care</span>
          {' '}
          <span className="inline_block">at home</span>
        </>
      )}
      subTitle="White-label solution to enhance home-based care for a digital health company"
      text={(
        <>
          We&apos;ve assisted our client to develop iOS/Android apps
          {' '}
          <span className="inline_block">and dashboard</span>
          {' '}
          to monitor, coordinate care needs, assess risks, see analytics, and get guidance
        </>
      )}
      data={['Australia', 'Healthcare']}
      cucumberVariant
      url={PageLinks.DIGITAL_HEALTHCARE_AT_HOME_CASE_STUDY}
    />,
  },
  {
    id: 27,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_27"
      icon={SalesforceAppLogo}
      logoSizes={{
        lg: {
          width: 258,
          height: 32,
        },
        sm: {
          width: 189,
          height: 24,
        },
      }}
      img={{
        sm: SalesforceAppMobileBg,
        md: SalesforceAppTabletBg,
        lg: SalesforceAppBg,
      }}
      description={(
        <>
          Salesforce app to automate
          <br />
          {' '}
          and streamline medical request
          <br />
          {' '}
          registrations
        </>
      )}
      title="Custom Salesforce app for medical support center"
      subTitle="Salesforce app to automate and streamline medical request registrations"
      text={(
        <>
          Onix designed an intuitive Salesforce app with
          {' '}
          <span className="inline_block">a comprehensive</span>
          {' '}
          registration form,
          streamlining the process for users handling various request types
        </>
      )}
      data={['USA', 'Healthcare']}
      cucumberVariant
      url={PageLinks.SALESFORCE_PROCESS_AUTOMATION_CASE_STUDY}
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 28,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_28"
      icon={SchedulerLogo}
      logoSizes={{
        lg: {
          width: 254,
          height: 37,
        },
        sm: {
          width: 138,
          height: 20,
        },
      }}
      img={{
        sm: SchedulerMobileBg,
        md: SchedulerTabletBg,
        lg: SchedulerBg,
      }}
      description={(
        <>
          Medical management system integrated
          <br />
          {' '}
          with real-time records to optimize
          <br />
          {' '}
          workflow
        </>
      )}
      title="Streamlined scheduling system for medical personnel"
      subTitle="Medical management system integrated with real-time records to optimize workflow"
      text="Onix developed an appointment app integrated with EHR, a progressive web app for doctors,
       implemented route optimization algorithm with intuitive UI/UX"
      data={['USA', 'Healthcare']}
      url={PageLinks.SCHEDULER_FOR_MEDICAL_DOCTORS_CASE}
    />,
  },
  {
    id: 29,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_29"
      icon={PersonalAssistLogo}
      logoSizes={{
        lg: {
          width: 198,
          height: 72,
        },
        sm: {
          width: 143,
          height: 52,
        },
      }}
      img={{
        sm: PersonalAssistMobileBg,
        md: PersonalAssistTabletBg,
        lg: PersonalAssistBg,
      }}
      description={(
        <>
          We created an intuitive app for
          <br />
          {' '}
          physician liaison activity
          <br />
          {' '}
          management & tracking
        </>
      )}
      title="Salesforce tracking app to streamline operations"
      subTitle="We created an intuitive app for physician liaison activity management & tracking"
      text="Onix crafted a user-friendly app, simplifying activity and documentation management for
       personnel, optimizing processes, and enhancing expense tracking"
      data={['USA', 'Healthcare']}
      cucumberVariant
      url={PageLinks.SALESFORCE_PERSONNEL_TRACKING_APP}
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 30,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_30"
      icon={HaasLogo}
      logoSizes={{
        lg: {
          width: 168,
          height: 56,
        },
        sm: {
          width: 112,
          height: 37,
        },
      }}
      img={{
        sm: HaasMobileBg,
        md: HaasTabletBg,
        lg: HaasBg,
      }}
      description={(
        <>
          HAAS is an end-to-end service for
          <br />
          {' '}
          selling and managing CNC machines in
          <br />
          {' '}
          one place
        </>
      )}
      title="App for machine services to streamline business"
      subTitle={(
        <>
          HAAS is an end-to-end service for selling
          {' '}
          <span className="inline_block">and managing</span>
          {' '}
          CNC machines in one place
        </>
      )}
      text={(
        <>
          Onix developed an app that automates internal processes, e-commerce app for buying
          {' '}
          <span className="inline_block">and controlling</span>
          {' '}
          machines, and service app for machine maintenance
        </>
      )}
      data={['USA', 'Machinery Manufacturing']}
      url={PageLinks.HAAS_AUTOMATION_CASE_STUDY}
    />,
  },
  {
    id: 31,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_31"
      icon={ShowerLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 214,
          height: 40,
        },
      }}
      img={{
        sm: ShowerMobileBg,
        md: ShowerTabletBg,
        lg: ShowerBg,
      }}
      description={(
        <>
          360° Shower is an end-to-end service
          <br />
          {' '}
          to simplify the shower installation
          <br />
          {' '}
          process
        </>
      )}
      title="Digital ecosystem for sanitary professionals"
      subTitle="360° Shower is an end-to-end service to simplify the shower installation process"
      text={(
        <>
          Onix created multi-platform apps, utilizing
          {' '}
          <span className="inline_block">a single</span>
          {' '}
          codebase, ensuring cross-platform compatibility, with robust error-tracking & monitoring solutions
        </>
      )}
      data={['Switzerland', 'Manufacturing']}
      url={PageLinks.DUSCHOLUX_360_SHOWER_CASE_STUDY}
      cucumberVariant
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 32,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_32"
      icon={OnixArLogo}
      logoSizes={{
        lg: {
          width: 160,
          height: 32,
        },
        sm: {
          width: 102,
          height: 20,
        },
      }}
      img={{
        sm: OnixArMobileBg,
        md: OnixArTabletBg,
        lg: OnixArBg,
      }}
      description={(
        <>
          AR app to provide a company’s
          <br />
          {' '}
          promotional materials in
          <br />
          {' '}
          an entertaining manner
        </>
      )}
      title="AR Mobile App to Enhance Promotional Experience"
      subTitle={(
        <>
          AR app to provide
          {' '}
          <span className="inline_block">a company’s</span>
          {' '}
          promotional materials in an entertaining manner
        </>
      )}
      text={(
        <>
          We built an AR app that allows users to move
          {' '}
          <span className="inline_block">the camera</span>
          {' '}
          over a brochure, and it reveals
          {' '}
          <span className="inline_block">the company’s</span>
          {' '}
          stats, projects, and a 3D model of the office
        </>
      )}
      data={['Ukraine', 'Marketing']}
      url={PageLinks.ONIX_AR_APP}
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 33,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_33"
      icon={VolkswagenLogo}
      logoSizes={{
        lg: {
          width: 60,
          height: 60,
        },
        sm: {
          width: 40,
          height: 40,
        },
      }}
      img={{
        sm: VolkswagenMobileBg,
        md: VolkswagenTabletBg,
        lg: VolkswagenBg,
      }}
      description={(
        <>
          Volkswagen Beetle is a promo webpage
          <br />
          {' '}
          transformed with immersive digital
          <br />
          {' '}
          elements
        </>
      )}
      title="Car promo page design concept for brand revolution"
      subTitle="Volkswagen Beetle is a promo webpage transformed with immersive digital elements"
      text="Onix crafted a dynamic UI with motion design elements, implemented responsive design
       principles, developed a tiered content strategy for optimization"
      data={['Marketing']}
      url={PageLinks.VOLKSWAGEN}
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 34,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_34"
      icon={ChinEasyLogo}
      logoSizes={{
        lg: {
          width: 75,
          height: 58,
        },
        sm: {
          width: 51,
          height: 39,
        },
      }}
      img={{
        sm: ChinEasyMobileBg,
        md: ChinEasyTabletBg,
        lg: ChinEasyBg,
      }}
      description={(
        <>
          ChinEasy is a revolutionizing
          <br />
          {' '}
          personalized learning app with
          <br />
          {' '}
          interactive features
        </>
      )}
      title="Brand identity design for chinese learning app"
      subTitle={(
        <>
          ChinEasy is
          {' '}
          <span className="inline_block">a revolutionizing</span>
          {' '}
          personalized learning app with interactive features
        </>
      )}
      text="We offered full design services, including UX/UI design for mobile/web apps,
       brand identity, motion graphics design & creation of animated characters"
      data={['China', 'M-learning']}
      url={PageLinks.CHINEASY_DESIGN_CASE_STUDY}
    />,
  },
  {
    id: 35,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_35"
      icon={LstmLogo}
      logoSizes={{
        lg: {
          width: 202,
          height: 34,
        },
        sm: {
          width: 144,
          height: 24,
        },
      }}
      img={{
        sm: LstmMobileBg,
        md: LstmTabletBg,
        lg: LstmBg,
      }}
      description={(
        <>
          Centralized aggregator classifying news
          <br />
          {' '}
          into 10 predefined topics for 40K users
        </>
      )}
      title="Optimizing news access with LSTM categorization"
      subTitle="Centralized aggregator classifying news into 10 predefined topics for 40K users"
      text="Onix provided solution for streamlined news consumption, language detection, database
       development, intuitive UI, and services integration"
      data={['Kazakhstan', 'Mobile Communications']}
      cucumberVariant
      url={PageLinks.LSTM_NEWS_CATEGORIZER_CASE_STUDY}
    />,
  },
  {
    id: 36,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_36"
      icon={MotionDesignLogo}
      logoSizes={{
        lg: {
          width: 249,
          height: 60,
        },
        sm: {
          width: 168,
          height: 40,
        },
      }}
      img={{
        sm: MotionDesignMobileBg,
        md: MotionDesignTabletBg,
        lg: MotionDesignBg,
      }}
      description={(
        <>
          Design concept features seamless
          <br />
          {' '}
          integration of motion elements for
          <br />
          {' '}
          consistent UX
        </>
      )}
      title="Custom animated concept for dynamic digital agency"
      subTitle="Design concept features seamless integration of motion elements for consistent UX"
      text="We crafted motion design concept, optimized speed, integrated animations, ensured
       cross-device compatibility, visual continuity & complexity management"
      data={['Motion Design']}
      url={PageLinks.ANIMATED_CONCEPT_DIGITAL_AGENCY_DESIGN_CASE_STUDY}
    />,
  },
  {
    id: 37,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_37"
      icon={NestbLogo}
      logoSizes={{
        lg: {
          width: 161,
          height: 60,
        },
        sm: {
          width: 107,
          height: 40,
        },
      }}
      img={{
        sm: NestbMobileBg,
        md: NestbTabletBg,
        lg: NestbBg,
      }}
      description={(
        <>
          Nestb is a user-friendly platform to
          <br />
          {' '}
          revolutionize the property search
          <br />
          {' '}
          process
        </>
      )}
      title="Brand identity and design for real estate business"
      subTitle="Nestb is a user-friendly platform to revolutionize the property search process"
      text={(
        <>
          We crafted a comprehensive brand identity
          {' '}
          <span className="inline_block">& brand</span>
          {' '}
          book, developed a user-centric homepage design for enhanced navigation to increase brand credibility
        </>
      )}
      data={['United Kingdom', 'Real Estate']}
      url={PageLinks.NESTB_DESIGN_CASE_STUDY}
    />,
  },
  {
    id: 38,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_38"
      icon={SpaceInfoLogo}
      logoSizes={{
        lg: {
          width: 176,
          height: 62,
        },
        sm: {
          width: 114,
          height: 40,
        },
      }}
      img={{
        sm: SpaceInfoMobileBg,
        md: SpaceInfoTabletBg,
        lg: SpaceInfoBg,
      }}
      description={(
        <>
          Motion design of a Hero Section
          <br />
          {' '}
          for a Space News website to optimize
          <br />
          {' '}
          performance
        </>
      )}
      title="Space news portal with seamless brand identity"
      subTitle="Motion design of a Hero Section for a Space News website to optimize performance"
      text={(
        <>
          We provided full adaptive design services, from layout balancing, headline creation to glitch transitions,
          {' '}
          <span className="inline_block">and brand</span>
          {' '}
          identity for optimizing performance
        </>
      )}
      data={['Space']}
      url={PageLinks.SPACE_NEWS}
    />,
  },
  {
    id: 39,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_39"
      icon={PhotoWhyLogo}
      logoSizes={{
        lg: {
          width: 207,
          height: 37,
        },
        sm: {
          width: 131,
          height: 24,
        },
      }}
      img={{
        sm: PhotoWhyMobileBg,
        md: PhotoWhyTabletBg,
        lg: PhotoWhyBg,
      }}
      description={(
        <>
          The app lets users share pictures and
          <br />
          {' '}
          connect with photographers worldwide
        </>
      )}
      title="Peer-to-peer learning app to empower photographers"
      subTitle="The app lets users share pictures and connect with photographers worldwide"
      text={(
        <>
          We developed a learning app with a payment gateway, live video streaming,
          implemented image recognition,
          {' '}
          <span className="inline_block">and ensured</span>
          {' '}
          security with AWS infrastructure
        </>
      )}
      data={['USA', 'Social Media']}
      url={PageLinks.PHOTOWHY_CASE_STUDY}
    />,
  },
  {
    id: 40,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_40"
      icon={JsaLogo}
      logoSizes={{
        lg: {
          width: 228,
          height: 60,
        },
        sm: {
          width: 152,
          height: 40,
        },
      }}
      img={{
        sm: JsaMobileBg,
        md: JsaTabletBg,
        lg: JsaBg,
      }}
      description={(
        <>
          JSA is a platform that offers
          <br />
          {' '}
          personalized training and nutrition
          <br />
          {' '}
          services
        </>
      )}
      title="Online sports & fitness platform"
      subTitle="JSA is a platform that offers personalized training and nutrition services"
      text="The client came to us with an already existing project and asked to help implement
       specific features, improve existing ones, and fix bugs"
      data={['USA', 'Sports & Fitness']}
      url={PageLinks.JAMES_SMITH_ACADEMY_CASE_STUDY}
    />,
  },
  {
    id: 41,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_41"
      icon={MiPaddleLogo}
      logoSizes={{
        lg: {
          width: 189,
          height: 42,
        },
        sm: {
          width: 126,
          height: 28,
        },
      }}
      img={{
        sm: MiPaddleMobileBg,
        md: MiPaddleTabletBg,
        lg: MiPaddleBg,
      }}
      description={(
        <>
          MiPaddle is a site & app for paddle
          <br />
          {' '}
          tennis fans to boost skills & track
          <br />
          {' '}
          progress
        </>
      )}
      title="Mobile app & website for paddle tennis enthusiasts"
      subTitle="MiPaddle is a site & app for paddle tennis fans to boost skills & track progress"
      text={(
        <>
          The client came to us by a recommendation
          {' '}
          <span className="inline_block">and requested</span>
          {' '}
          to create a paddle tennis website, Android & iOS apps, and Admin Panel for content management
        </>
      )}
      data={['USA', 'Sports & Fitness']}
      url={PageLinks.MIPADDLE_CASE_STUDY}
    />,
  },
  {
    id: 42,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_42"
      icon={ClubhouseLogo}
      logoSizes={{
        lg: {
          width: 225,
          height: 40,
        },
        sm: {
          width: 150,
          height: 26,
        },
      }}
      img={{
        sm: ClubhouseMobileBg,
        md: ClubhouseTabletBg,
        lg: ClubhouseBg,
      }}
      description={(
        <>
          Clubhouse is an app that reshapes
          <br />
          {' '}
          habits, strengthens body, and promotes
          <br />
          {' '}
          fitness
        </>
      )}
      title="Sports & fitness platform to transform users’ health"
      subTitle="Clubhouse is an app that reshapes habits, strengthens body, and promotes fitness"
      text={(
        <>
          Onix created prototypes, built an intuitive fitness platform with personalized workouts,
          nutrition support, seamless payments,
          {' '}
          <span className="inline_block">and mailing</span>
          {' '}
          services
        </>
      )}
      data={['USA', 'Sports & Fitness']}
      url={PageLinks.CLUBHOUSE_CASE_STUDY}
    />,
  },
  {
    id: 43,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_43"
      icon={ColoradoLogo}
      logoSizes={{
        lg: {
          width: 194,
          height: 54,
        },
        sm: {
          width: 130,
          height: 36,
        },
      }}
      img={{
        sm: ColoradoMobileBg,
        md: ColoradoTabletBg,
        lg: ColoradoBg,
      }}
      description={(
        <>
          Colorado Sports Video is a website for
          <br />
          {' '}
          recording and editing youth & sports
          <br />
          {' '}
          events
        </>
      )}
      title="Video production platform for youth sports events"
      subTitle={(
        <>
          Colorado Sports Video is
          {' '}
          <span className="inline_block">a website</span>
          {' '}
          for recording
          {' '}
          <span className="inline_block">and editing</span>
          {' '}
          youth & sports events
        </>
      )}
      text={(
        <>
          Onix rebuilt a WordPress website into
          {' '}
          <span className="inline_block">a premier</span>
          {' '}
          booking & video management system, optimized order processing, scheduling,
          {' '}
          <span className="inline_block">and client</span>
          {' '}
          correspondence
        </>
      )}
      data={['USA', 'Sports & Fitness']}
      url={PageLinks.COLORADO_SPORTS_VIDEO_CASE_STUDY}
    />,
  },
  {
    id: 44,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_44"
      icon={BsteverLogo}
      logoSizes={{
        lg: {
          width: 226,
          height: 42,
        },
        sm: {
          width: 151,
          height: 28,
        },
      }}
      img={{
        sm: BsteverMobileBg,
        md: BsteverTabletBg,
        lg: BsteverBg,
      }}
      description={(
        <>
          BSTEVR is NFL game simulator app for
          <br />
          {' '}
          teams & line-ups to share fantasy
          <br />
          {' '}
          scenarios
        </>
      )}
      title="NFL games simulator and game reviews generator app"
      subTitle={(
        <>
          BSTEVR is NFL game simulator app for
          {' '}
          <span className="inline_block">teams & line-ups</span>
          {' '}
          to share fantasy scenarios
        </>
      )}
      text="Onix crafted an innovative NFL game simulator, database, and recapper,
       enabling fans to simulate matches, generate detailed game reviews, and connect"
      data={['USA', 'Sports & Fitness']}
      url={PageLinks.BSTEVR_CASE_STUDY}
    />,
  },
  {
    id: 45,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_45"
      icon={BetterMeLogo}
      logoSizes={{
        lg: {
          width: 204,
          height: 38,
        },
        sm: {
          width: 108,
          height: 20,
        },
      }}
      img={{
        sm: BetterMeMobileBg,
        md: BetterMeTabletBg,
        lg: BetterMeBg,
      }}
      description={(
        <>
          BetterMe is an online store with unique
          <br />
          {' '}
          fitness clothes for BetterMe customers
        </>
      )}
      title="E-commerce website to enhance the shopping experience"
      subTitle="BetterMe is an online store with unique fitness clothes for BetterMe customers"
      text={(
        <>
          We designed an e-commerce website for
          {' '}
          <span className="inline_block">the convenient</span>
          {' '}
          purchase of products compatible with the BetterMe training ecosystem
        </>
      )}
      data={['USA', 'Sports & Fitness']}
      url={PageLinks.BETTERME_CASE_STUDY}
      eyeBlackStyle
      cucumberVariant
    />,
  },
  {
    id: 46,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_46"
      icon={StridistLogo}
      logoSizes={{
        lg: {
          width: 260,
          height: 60,
        },
        sm: {
          width: 174,
          height: 40,
        },
      }}
      img={{
        sm: StridistMobileBg,
        md: StridistTabletBg,
        lg: StridistBg,
      }}
      description={(
        <>
          Stridist is all-in-one solution to
          <br />
          {' '}
          offer online fitness and nutrition
          <br />
          {' '}
          services
        </>
      )}
      title="Management platform for fitness and nutrition professionals"
      subTitle="Stridist is all-in-one solution to offer online fitness and nutrition services"
      text={(
        <>
          The Onix team built the new website architecture
          {' '}
          <span className="inline_block">and implemented</span>
          {' '}
          new features to extend the whole fitness platform without compromising performance
        </>
      )}
      data={['USA', 'Sports & Fitness']}
      url={PageLinks.STRIDIST_CASE_STUDY}
      eyeBlackStyle
    />,
  },
  {
    id: 47,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_47"
      icon={PhlexLogo}
      logoSizes={{
        lg: {
          width: 150,
          height: 56,
        },
        sm: {
          width: 107,
          height: 40,
        },
      }}
      img={{
        sm: PhlexMobileBg,
        md: PhlexTabletBg,
        lg: PhlexBg,
      }}
      description={(
        <>
          Phlex is a swim-tracking app that uses
          <br />
          {' '}
          wearable devices to collect motion data
        </>
      )}
      title="Innovative solution to track swimming workouts"
      subTitle="Phlex is a swim-tracking app that uses wearable devices to collect motion data"
      text={(
        <>
          We upgraded an old iOS codebase, built
          {' '}
          <span className="inline_block">an Android</span>
          {' '}
          app from scratch, created
          {' '}
          <span className="inline_block">an intuitive</span>
          {' '}
          design, ensured proper data synching between watches and apps
        </>
      )}
      data={['USA', 'Sports & Fitness']}
      url={PageLinks.PHLEX_CASE_STUDY}
    />,
  },
  {
    id: 48,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_48"
      icon={ProgressLogo}
      logoSizes={{
        lg: {
          width: 236,
          height: 60,
        },
        sm: {
          width: 157,
          height: 40,
        },
      }}
      img={{
        sm: ProgressMobileBg,
        md: ProgressTabletBg,
        lg: ProgressBg,
      }}
      description={(
        <>
          Progress 247 is an end-to-end platform
          <br />
          {' '}
          to provide online fitness coaching
        </>
      )}
      title="Next-level fitness platform for personal trainers"
      subTitle="Progress 247 is an end-to-end platform to provide online fitness coaching"
      text="Onix developed a fitness platform with customized workout plans, calorie calculators, gamification,
       email automation, and secure payment processing"
      data={['United Kingdom', 'Sports & Fitness']}
      url={PageLinks.FITNESS_COACHING_PLATFORM_DESIGN_CASE_STUDY}
      eyeBlackStyle
    />,
  },
  {
    id: 49,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_49"
      icon={BanskaStavnicaLogo}
      logoSizes={{
        lg: {
          width: 133,
          height: 55,
        },
        sm: {
          width: 89,
          height: 37,
        },
      }}
      img={{
        sm: BanskaStavnicaMobileBg,
        md: BanskaStavnicaTabletBg,
        lg: BanskaStavnicaBg,
      }}
      description={(
        <>
          Unique VR tour to engage and educate
          <br />
          {' '}
          visitors about Banská Štiavnica&apos;s
          <br />
          {' '}
          history
        </>
      )}
      title="Transformed historical tour with VR implementation"
      subTitle="Unique VR tour to engage and educate visitors about Banská Štiavnica's history"
      text="Onix developed a VR app, digitized museum items, implemented realistic animations,
       optimized 3D models for real-time rendering & simulated water effects"
      data={['Slovakia', 'Tourism']}
      url={PageLinks.BANSKA_STIAVNICA}
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 50,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_50"
      icon={MisterbbLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 213,
          height: 40,
        },
      }}
      img={{
        sm: MisterbbMobileBg,
        md: MisterbbTabletBg,
        lg: MisterbbBg,
      }}
      description={(
        <>
          MisterB&B is a platform that delivers
          <br />
          {' '}
          gay-friendly travel booking services
        </>
      )}
      title="Innovative solution to track swimming workouts"
      subTitle={(
        <>
          MisterB&B is a platform that delivers
          {' '}
          <span className="inline_block">gay-friendly</span>
          {' '}
          travel booking services
        </>
      )}
      text={(
        <>
          We improved performance, extended
          {' '}
          <span className="inline_block">the product&apos;s</span>
          {' '}
          functionality, offered more reliable technologies,
          {' '}
          <span className="inline_block">and implemented</span>
          {' '}
          <span className="inline_block">third-party</span>
          {' '}
          services
        </>
      )}
      data={['France', 'Tourism']}
      url={PageLinks.MISTERBNB_CASE_STUDY}
    />,
  },
  {
    id: 51,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_51"
      icon={AdventuresLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 213,
          height: 40,
        },
      }}
      img={{
        sm: AdventuresMobileBg,
        md: AdventuresTabletBg,
        lg: AdventuresBg,
      }}
      description={(
        <>
          10Adventures is a leading adventure
          <br />
          {' '}
          marketplace with immersive multimedia
          <br />
          {' '}
          elements
        </>
      )}
      title="Travel website redesign & brand identity creation"
      subTitle="10Adventures is a leading adventure marketplace with immersive multimedia elements"
      text={(
        <>
          We provided website redesign, integrated diverse content with optimized UX, enabled
          {' '}
          <span className="inline_block">an intuitive</span>
          {' '}
          region-based navigation system to enhance performance
        </>
      )}
      data={['USA', 'Travel']}
      url={PageLinks.TRAVEL_MARKETPLACE_DESIGN_CASE_STUDY}
      eyeBlackStyle
      eyeBlackStyleMobile
      cucumberVariant
    />,
  },
  {
    id: 52,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_52"
      icon={TravelbidLogo}
      logoSizes={{
        lg: {
          width: 269,
          height: 41,
        },
        sm: {
          width: 154,
          height: 23,
        },
      }}
      img={{
        sm: TravelbidMobileBg,
        md: TravelbidTabletBg,
        lg: TravelbidBg,
      }}
      description={(
        <>
          TravelBid is a revolutionary new travel
          <br />
          {' '}
          booking app with over 14K local
          <br />
          {' '}
          businesses
        </>
      )}
      title="Travel booking with seamless inquiry management"
      subTitle="TravelBid is a revolutionary new travel booking app with over 14K local businesses"
      text="Onix developed a mobile-friendly platform with intuitive UX/UI design, integrated
       secure payment gateways, and facilitated real-time messaging"
      data={['Cyprus', 'Travel and Booking']}
      url={PageLinks.TRAVELBID_CASE_STUDY}
    />,
  },
  {
    id: 53,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_53"
      icon={InnerVRLogo}
      logoSizes={{
        lg: {
          width: 256,
          height: 62,
        },
        sm: {
          width: 132,
          height: 32,
        },
      }}
      img={{
        sm: InnerVRBgMobile,
        md: InnerVRBgTablet,
        lg: InnerVRBg,
      }}
      description={(
        <>
          InnerVR is an Oculus meditation
          <br />
          {' '}
          and relaxation VR game in various
          <br />
          {' '}
          3D environments
        </>
      )}
      title="Custom immersive app development for mental health"
      subTitle="InnerVR is an Oculus meditation and relaxation VR game in various 3D environments"
      text={(
        <>
          We developed a VR meditation app for Oculus Quest 2, optimized performance
          {' '}
          <span className="inline_block">and resolved</span>
          {' '}
          technical challenges, added virtual environments & meditations
        </>
      )}
      data={['USA', 'VR/AR']}
      url={PageLinks.INNERVR_CASE_STUDY}
    />,
  },
  {
    id: 54,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_54"
      icon={OneTouchVRLogo}
      logoSizes={{
        lg: {
          width: 180,
          height: 48,
        },
        sm: {
          width: 112,
          height: 30,
        },
      }}
      img={{
        sm: OneTouchVRMobileBg,
        md: OneTouchVRTabletBg,
        lg: OneTouchVRBg,
      }}
      description={(
        <>
          Immersive VR movie experiences on
          <br />
          {' '}
          multiple platforms with glow screen
          <br />
          {' '}
          effects
        </>
      )}
      title="Custom-themed multi-format movie distribution app"
      subTitle="Immersive VR movie experiences on multiple platforms with glow screen effects"
      text="We built a reliable VR movie app with ultra-realistic 360-degree graphics,
       compatible across platforms, involving big-screen actors and crafted sound"
      data={['USA', 'VR/AR']}
      url={PageLinks.ONE_TOUCH_VR}
    />,
  },
  {
    id: 55,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_55"
      icon={TrvlPageLogo}
      logoSizes={{
        lg: {
          width: 238,
          height: 60,
        },
        sm: {
          width: 159,
          height: 40,
        },
      }}
      img={{
        sm: TrvlPageMobileBg,
        md: TrvlPageTabletBg,
        lg: TrvlPageBg,
      }}
      description={(
        <>
          Redesigning a travel social media app
          <br />
          {' '}
          to improve user engagement
        </>
      )}
      title="Redesigning a travel-centric social media app"
      subTitle="Redesigning a travel social media app to improve user engagement"
      text={(
        <>
          We revamped a travel social media app, implementing
          {' '}
          <span className="inline_block">a dynamic</span>
          {' '}
          rebranding strategy
          {' '}
          <span className="inline_block">and enhancing</span>
          {' '}
          <span className="inline_block">the UX/UI</span>
        </>
      )}
      data={['USA', 'Travel']}
      url={PageLinks.TRVLPAGE_DESIGN_CASE_STUDY}
      eyeBlackStyleMobile
    />,
  },
  {
    id: 56,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_56"
      icon={SwitzerlandLogo}
      logoSizes={{
        lg: {
          width: 268,
          height: 58,
        },
        sm: {
          width: 178,
          height: 39,
        },
      }}
      img={{
        sm: SwitzerlandMobileBg,
        md: SwitzerlandTabletBg,
        lg: SwitzerlandBg,
      }}
      description={(
        <>
          Creating a platform to compare
          <br />
          {' '}
          the costs of living in Switzerland
        </>
      )}
      title="Cost Comparison Platform in Switzerland"
      subTitle="Creating a platform to compare the costs of living in Switzerland"
      text="We developed a unique Swiss comparison platform that helps users make informed
       decisions on the biggest cost positions in Switzerland"
      data={['Switzerland', 'Financial services']}
      url={PageLinks.SWITZERLAND_LIVING_COST_CALCULATOR_CASE_STUDY}
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 57,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_57"
      icon={GolfLiveLogo}
      logoSizes={{
        lg: {
          width: 265,
          height: 36,
        },
        sm: {
          width: 177,
          height: 24,
        },
      }}
      img={{
        sm: GolfLiveBgMobile,
        md: GolfLiveBgTablet,
        lg: GolfLiveBg,
      }}
      description={(
        <>
          Well-structured platform to provide
          <br />
          {' '}
          online golf coaching
        </>
      )}
      title="App that allows for convenient golf coaching"
      subTitle="Well-structured platform to provide online golf coaching"
      text="Onix worked on an online golf coaching app, effectively addressing initial
        usability issues and laying the groundwork for scalability"
      data={['USA', 'Sport']}
      url={PageLinks.GOLF_LIVE_CASE_STUDY}
    />,
  },
  {
    id: 58,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_58"
      icon={SolomiyaLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 214,
          height: 40,
        },
      }}
      img={{
        sm: SolomiyaMobileBg,
        md: SolomiyaTabletBg,
        lg: SolomiyaBg,
      }}
      description={(
        <>
          Cross-platform mobile app designed to
          <br />
          {' '}
          help with stress, PTSD, insomnia, etc.
        </>
      )}
      title={(
        <>
          Mental health mobile app,
          {' '}
          <span className="inline_block">a minimum</span>
          {' '}
          viable product
        </>
      )}
      subTitle="Cross-platform mobile app designed to help with stress, PTSD, insomnia, etc."
      text={(
        <>
          Onix created Solomiya’s logo
          {' '}
          <span className="inline_block">and parts</span>
          {' '}
          of branding, designed the mobile app’s interface, and coded its back-end
        </>
      )}
      data={['Germany', 'Healthcare']}
      url={PageLinks.SOLOMIYA}
    />,
  },
  {
    id: 59,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_59"
      icon={TravelTailLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 213,
          height: 40,
        },
      }}
      img={{
        sm: TravelTailMobileBg,
        md: TravelTailTabletBg,
        lg: TravelTailBg,
      }}
      description={(
        <>
          The platform to meet the increasing
          <br />
          {' '}
          demand for pet-centric travel
          <br />
          {' '}
          experiences
        </>
      )}
      title={(
        <>
          Comprehensive pet-focused travel solution
        </>
      )}
      subTitle={(
        <>
          The platform to meet the&nbsp;increasing demand for pet&#8209;centric travel experiences
        </>
      )}
      text={(
        <>
          We built an MVP for a pet travel platform, created a distinctive brand
          identity and a design style guide, and built a robust technological foundation
        </>
      )}
      data={['Sweden', 'Travel']}
      url={PageLinks.PET_TRAVEL_PLATFORM_DEVELOPMENT_CASE_STUDY}
      cucumberVariant
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 60,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_60"
      icon={ApartmentRentalLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 214,
          height: 40,
        },
      }}
      img={{
        sm: ApartmentRentalMobileBg,
        md: ApartmentRentalTabletBg,
        lg: ApartmentRentalBg,
      }}
      description={(
        <>
          How Onix offered Webflow development
          <br />
          {' '}
          services to a short-term rental
          <br />
          {' '}
          company.
        </>
      )}
      title={(
        <>
          Portfolio website for a short-term luxury apts rental business
        </>
      )}
      subTitle={(
        <>
          How Onix offered Webflow development services to a short-term rental company.
        </>
      )}
      text={(
        <>
          Onix provided Webflow development and design services to create a portfolio
          website for a short-term luxury apartment rental company.
        </>
      )}
      data={['France', 'Real Estate']}
      url={PageLinks.APARTMENT_RENTAL_CASE_STUDY}
    />,
  },
  {
    id: 61,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_61"
      icon={CustomCRMLogo}
      logoSizes={{
        lg: {
          width: 408,
          height: 60,
        },
        sm: {
          width: 272,
          height: 38,
        },
      }}
      img={{
        sm: CustomCRMMobileBg,
        md: CustomCRMTabletBg,
        lg: CustomCRMBg,
      }}
      description={(
        <>
          Development a CRM for healthcare
          <br />
          {' '}
          customer relationship management
        </>
      )}
      title="Developing custom CRM software"
      subTitle="Development a CRM for healthcare customer relationship management"
      text={(
        <>
          Onix’s developers created a&nbsp;tailored solution that allowed to digitize
          insurance agents’ work process at minimum cost for the company.
        </>
      )}
      data={['USA', 'Healthcare']}
      url={PageLinks.CUSTOM_CRM_HEALTHCARE_INSURANCE_CASE_STUDY}
    />,
  },
  {
    id: 62,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_62"
      icon={NibulonLogo}
      logoSizes={{
        lg: {
          width: 164,
          height: 60,
        },
        sm: {
          width: 110,
          height: 40,
        },
      }}
      img={{
        sm: NibulonMobileBg,
        md: NibulonTabletBg,
        lg: NibulonBg,
      }}
      description={(
        <>
          Revamped website design for Nibulon
          <br />
          {' '}
          leading agrarian company
        </>
      )}
      title="The design creation for agrarian website"
      subTitle="Revamped website design for Nibulon leading agrarian company"
      text={(
        <>
          How Onix developed a brand new design and expanded functionality for the&nbsp;Nibulon web platform
        </>
      )}
      data={['Ukraine', 'Agriculture']}
      url={PageLinks.AGRICULTURE_INDUSTRY_WEBSITE_DESIGN_CASE_STUDY}
    />,
  },
  {
    id: 63,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_63"
      icon={ModelAptLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 210,
          height: 40,
        },
      }}
      img={{
        sm: ModelAptMobileBg,
        md: ModelAptTabletBg,
        lg: ModelAptBg,
      }}
      description={(
        <>
          How Onix offered Webflow development
          <br />
          {' '}
          services to a short-term rental company
        </>
      )}
      title="Portfolio website for a short-term luxury apts rental business"
      subTitle="How Onix offered Webflow development services to a short-term rental company"
      text={(
        <>
          Onix provided Webflow development and design services to create a portfolio
          website for a short-term luxury apartment rental company.
        </>
      )}
      data={['France', 'Real Estate']}
      url={PageLinks.APARTMENT_RENTAL_COMPANY_WEBSITE_CASE_STUDY}
    />,
  },
  {
    id: 64,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_64"
      icon={MetroLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 213,
          height: 40,
        },
      }}
      img={{
        sm: MetroMobileBg,
        md: MetroTabletBg,
        lg: MetroBg,
      }}
      description={(
        <>
          iOS & Android apps for a nation-wide
          <br />
          {' '}
          chain of wholesale grocery retail
          <br />
          {' '}
          stores
        </>
      )}
      title="Branded shopping mobile app for&nbsp;iOS&nbsp;&&nbsp;Android"
      subTitle="iOS & Android apps for a&nbsp;nation-wide chain of wholesale grocery retail stores"
      text={(
        <>
          Onix designed and coded native mobile apps with a barcode scanner, virtual customer card, shopping
          list & vouchers, and an admin panel for marketers
        </>
      )}
      data={['Ukraine', 'Retail']}
      url={PageLinks.METRO_CASE_STUDY}
      eyeBlackStyle
      eyeBlackStyleMobile
    />,
  },
  {
    id: 65,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_65"
      icon={LivboxLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 213,
          height: 40,
        },
      }}
      img={{
        sm: LivboxBgMobile,
        md: LivboxBgTablet,
        lg: LivboxBg,
      }}
      description={(
        <>
          A smart, intuitive iOS app development
          <br />
          {' '}
          for creative individuals
        </>
      )}
      title="Mobile app to organize inspiring ideas"
      subTitle="A smart, intuitive iOS app development for creative individuals"
      text={(
        <>
          Onix built a powerful app for organizing creative ideas. The app allows creators and thinkers to record,
          explore, and reflect on their thoughts, ensuring no idea is lost
        </>
      )}
      data={['USA', 'Productivity tool']}
      url={PageLinks.LIVBOX_CASE_STUDY}
    />,
  },
  {
    id: 66,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_66"
      icon={AnijaManorLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 213,
          height: 40,
        },
      }}
      img={{
        sm: AnijaManorBgMobile,
        md: AnijaManorBgTablet,
        lg: AnijaManorBg,
      }}
      description={(
        <>
          Onix created a gamified VR experience
          <br />
          {' '}
          for an Estonian country house museum
        </>
      )}
      title="Interactive VR museum experience for Meta Quest 2"
      subTitle="Onix created a gamified VR experience for an Estonian country house museum"
      text={(
        <>
          Onix coded the functionalities required by a history-themed VR game of 5 rounds, localized
          it into 5 languages, and tested and deployed the game
        </>
      )}
      data={['Estonia', 'Entertainment']}
      url={PageLinks.INTERACTIVE_VR_MUSEUM_CASE_STUDY}
    />,
  },
  {
    id: 67,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_67"
      icon={KozystayLogo}
      logoSizes={{
        lg: {
          width: 160,
          height: 60,
        },
        sm: {
          width: 107,
          height: 40,
        },
      }}
      img={{
        sm: KozystayBgMobile,
        md: KozystayBgTablet,
        lg: KozystayBg,
      }}
      description={(
        <>
          The online apartment booking system is
          <br />
          {' '}
          based on a user-friendly web app
        </>
      )}
      title="Web app for an apartment booking system"
      subTitle="The online apartment booking system is based on a user-friendly web app"
      text={(
        <>
          This online apartment booking system demonstrates Onix’s ability to create
          visually appealing and user-friendly web apps for the travel industry
        </>
      )}
      data={['Ukraine', 'Travel']}
      url={PageLinks.KOZYSTAY_CASE_STUDY}
      cucumberVariant
    />,
  },
  {
    id: 68,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_68"
      icon={SaviiLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 190,
          height: 40,
        },
      }}
      img={{
        sm: SaviiBgMobile,
        md: SaviiBgTablet,
        lg: SaviiBg,
      }}
      description={(
        <>
          Children-focused banking app
          <br />
          {' '}
          development for financial literacy
        </>
      )}
      title="Building a children-focused banking app"
      subTitle="Children-focused banking app development for financial literacy"
      text={(
        <>
          We delivered a beta version of the application within the specified timeframe,
          allowing for early user feedback and validation of critical features
        </>
      )}
      data={['UAE', 'Fintech']}
      url={PageLinks.SAVII_CASE_STUDY}
      eyeBlackStyleMobile
    />,
  },
  {
    id: 69,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_69"
      icon={AnalyticsLogo}
      logoSizes={{
        lg: {
          width: 417,
          height: 60,
        },
        sm: {
          width: 260,
          height: 38,
        },
      }}
      img={{
        sm: AnalyticsBgMobile,
        md: AnalyticsBgTablet,
        lg: AnalyticsBg,
      }}
      description={(
        <>
          Onix developed an intuitive
          <br />
          {' '}
          web app for gathering
          <br />
          {' '}
          analytics and taking surveys.
        </>
      )}
      title="Web app for analytics and surveys"
      subTitle="Onix developed an intuitive web app for gathering analytics and taking surveys."
      text={(
        <>
          A comprehensive web app designed to streamline analytics processes
          and empower users with intuitive dashboards and graphics.
        </>
      )}
      data={['USA', 'Analytics']}
      cucumberVariant
      url={PageLinks.ANALYTICALS_CASE_STUDY}
    />,
  },
  {
    id: 70,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_70"
      icon={VyraLogo}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 213,
          height: 40,
        },
      }}
      img={{
        sm: VyraMobileBg,
        md: VyraTabletBg,
        lg: VyraBg,
      }}
      description={(
        <>
          A comprehensive learning platform with
          {' '}
          <br className="screen-md:hidden" />
          {' '}
          an&nbsp;extensive content library
        </>
      )}
      title="Development of a dynamic learning platform"
      subTitle={(
        <>
          A comprehensive learning platform with an&nbsp;extensive content library
        </>
      )}
      text={(
        <>
          We redesigned the website to fulfill accessibility standards,
          implemented necessary enhancements and refinements,
          integrated new&nbsp;features
        </>
      )}
      data={['Ireland', 'EdTech']}
      url={PageLinks.VYRA_CASE_STUDY}
    />,
  },
  {
    id: 71,
    content: <CaseStudyVideoCarouselItem
      id="caseStudyVideoIdentificator_71"
      videoId={71}
      icon={GolfVideoLogo}
      logoSizes={{
        xxl: {
          width: 320,
          height: 60,
        },
        lg: {
          width: 213,
          height: 40,
        },
        sm: {
          width: 107,
          height: 20,
        },
      }}
      img={{
        sm: GolfVideoBgMobile,
        md: GolfVideoBgTablet,
        lg: GolfVideoBg,
      }}
      title="Online Golf Coaching App"
      text="From a broken vendor handoff to a scalable platform."
      clients={[
        {
          name: 'Keith Scioli',
          position: 'CEO and founder, Golf Live',
        },
      ]}
      cucumbersData={{
        duration: '2+ years',
        teamSize: '8 developers',
      }}
      btnText="More about project"
      videoSrc="/static/video/golf-live.mp4"
      url={PageLinks.GOLF_LIVE_CASE_STUDY}
    />,
  },
  {
    id: 72,
    content: <CaseStudyVideoCarouselItem
      id="caseStudyVideoIdentificator_72"
      videoId={72}
      icon={VyraVideoLogo}
      logoSizes={{
        xxl: {
          width: 320,
          height: 60,
        },
        lg: {
          width: 213,
          height: 40,
        },
        sm: {
          width: 107,
          height: 20,
        },
      }}
      img={{
        sm: VyraVideoBgMobile,
        md: VyraVideoBgTablet,
        lg: VyraVideoBg,
      }}
      title="Learning Platform Development"
      text="From MVP to a full-scale B2B solution."
      clients={[
        {
          name: 'Eoin Le Masney',
          position: 'CTO, Vyra',
        },
        {
          name: 'Jack Dwyer',
          position: 'CEO, Vyra',
        },
      ]}
      cucumbersData={{
        duration: '4+ years',
        teamSize: '9 developers',
      }}
      btnText="More about project"
      videoSrc="/static/video/vyra.mp4"
      url={PageLinks.VYRA_CASE_STUDY}
    />,
  },
  {
    id: 73,
    content: <CaseStudyVideoCarouselItem
      id="caseStudyVideoIdentificator_73"
      videoId={73}
      icon={AdoricVideoLogo}
      logoSizes={{
        xxl: {
          width: 320,
          height: 60,
        },
        lg: {
          width: 213,
          height: 40,
        },
        sm: {
          width: 107,
          height: 20,
        },
      }}
      img={{
        sm: AdoricVideoBgMobile,
        md: AdoricVideoBgTablet,
        lg: AdoricVideoBg,
      }}
      title="SaaS Marketing Platform"
      text="From bug-fixes to a complete product rescue."
      clients={[
        {
          name: 'Tal Revivo',
          position: 'CEO and founder, Adoric',
        },
      ]}
      cucumbersData={{
        duration: '10+ years',
        teamSize: '10 developers',
      }}
      btnText="More about project"
      videoSrc="/static/video/tal-revivo.mp4"
      url={PageLinks.SAAS_MARKETING_PLATFORM_CASE_STUDY}
    />,
  },
  {
    id: 74,
    content: <CaseStudyVideoCarouselItem
      id="caseStudyVideoIdentificator_74"
      videoId={74}
      icon={PhlexVideoLogo}
      logoSizes={{
        xxl: {
          width: 320,
          height: 60,
        },
        lg: {
          width: 213,
          height: 40,
        },
        sm: {
          width: 107,
          height: 20,
        },
      }}
      img={{
        sm: PhlexVideoBgMobile,
        md: PhlexVideoBgTablet,
        lg: PhlexVideoBg,
      }}
      title="Smart Swim Training Tracker"
      text="From concept to a community-loved app."
      clients={[
        {
          name: 'Ryan Rosenbaum',
          position: 'CPO, Phlex',
        },
      ]}
      cucumbersData={{
        duration: '3+ years',
        teamSize: '9 developers',
      }}
      btnText="More about project"
      videoSrc="/static/video/phlex.mp4"
      url={PageLinks.PHLEX_CASE_STUDY}
    />,
  },
  {
    id: 75,
    content: <CaseStudyCarouselItemSmall
      id="caseIdentificator_75"
      icon={MisterbbLogo}
      logoSizes={{
        lg: { width: 320, height: 60 },
        sm: { width: 213, height: 40 },
      }}
      img={{
        sm: MisterbbMobileBg,
        md: MisterbbTabletBg,
        lg: MisterbbBg,
      }}
      title="From broken code to global success"
      solution={(
        <>
          Onix rebuilt the platform with modern tech, new features, and performance at scale.
        </>
      )}
      result={(
        <>
          1 M+ listings in 200+ countries, Forbes-featured as the “gay Airbnb”, 900 K+ members.
        </>
      )}
      data={['France', 'Tourism']}
      url={PageLinks.MISTERBNB_CASE_STUDY}
    />,
  },
  {
    id: 76,
    content: <CaseStudyCarouselItemSmall
      id="caseIdentificator_76"
      icon={DigitalHealthLogo}
      logoSizes={{
        lg: { width: 293, height: 60 },
        sm: { width: 196, height: 40 },
      }}
      img={{
        sm: DigitalHealthMobileBg,
        md: DigitalHealthTabletBg,
        lg: DigitalHealthBg,
      }}
      title="From an outdated system to modern care"
      solution={(
        <>
          We launched branded apps, added AI-powered automation, and rebuilt the architecture.
        </>
      )}
      result={(
        <>
          A white-label telehealth platform improving care and reducing errors.
        </>
      )}
      data={['Australia', 'Healthcare']}
      cucumberVariant
      url={PageLinks.DIGITAL_HEALTHCARE_AT_HOME_CASE_STUDY}
    />,
  },
  {
    id: 77,
    content: <CaseStudyCarouselItemSmall
      id="caseIdentificator_77"
      icon={StridistLogo}
      logoSizes={{
        lg: { width: 260, height: 60 },
        sm: { width: 174, height: 40 },
      }}
      img={{
        sm: StridistMobileBg,
        md: StridistTabletBg,
        lg: StridistTabletBg,
      }}
      title="From scaling issues to seamless coaching"
      solution={(
        <>
          Onix fixed architecture, UX, and payments to launch a sleek, scalable SaaS for fitness pros.
        </>
      )}
      result={(
        <>
          A thriving platform used by countless coaches and clients.
        </>
      )}
      data={['USA', 'Sports & Fitness']}
      url={PageLinks.STRIDIST_CASE_STUDY}
      eyeBlackStyle
    />,
  },
  {
    id: 78,
    content: <CaseStudyCarouselItemSmall
      id="caseIdentificator_78"
      icon={ProductScopeLogoSmall}
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 214,
          height: 40,
        },
      }}
      img={{
        sm: ProductScopeMobileBg,
        md: ProductScopeTabletBg,
        lg: ProductScopeBg,
      }}
      title="From idea to AI-powered skin insights"
      solution={(
        <>
          We built a cross-platform mobile app with advanced computer vision and AI to detect
          skin issues and analyze cosmetic compatibility.
        </>
      )}
      result={(
        <>
          An innovative dermatology tool with 250K+ downloads, 50K+ monthly users, and
          high user trust—empowering better skincare decisions worldwide.
        </>
      )}
      data={['USA', 'Beauty, Cosmetics']}
      cucumberVariant
      url={PageLinks.COSMETICS_ANALYSIS_AI_APP_CASE_STUDY}
    />,
  },
  {
    id: 79,
    content: <CaseStudyCarouselItem
      id="caseStudyIdentificator_79"
      icon={HCPLogo}
      cucumberVariant
      eyeBlackStyle
      eyeBlackStyleMobile
      logoSizes={{
        lg: {
          width: 320,
          height: 60,
        },
        sm: {
          width: 214,
          height: 40,
        },
      }}
      img={{
        sm: HCPBgMobile,
        md: HCPBgTablet,
        lg: HCPBg,
      }}
      description={(
        <>
          The new HCP portal raised
          {' '}
          <br />
          {' '}
          the support team efficiency
          {' '}
          <br />
          {' '}
          and provider satisfaction
        </>
      )}
      title={(
        <>
          Cutting-edge HCP portal for
          a&nbsp;state-wide network
        </>
      )}
      subTitle="The new HCP portal raised the support team efficiency and provider satisfaction"
      text={(
        <>
          The portal let customers self-serve operational needs,
          leading to 3X faster claims/referrals processing and 95%
          drop in inbound phone calls and emails
        </>
      )}
      data={['USA', 'Healthcare']}
      url={PageLinks.HEALTHCARE_PORTAL_CASE}
    />,
  },
  {
    id: 1001,
    content: <CaseStudiesSeeAllCasesSmall />,
  },
];

const getCaseStudies = (ids: number[], saleUrl?: boolean) => {
  const caseStudiesDataWithAdditionalCard: ICaseStudiesData[] = [
    ...caseStudiesData,
    {
      id: 1000,
      content: <CaseStudiesSeeAllCases saleUrl={saleUrl} />,
    },
  ];

  return caseStudiesDataWithAdditionalCard
    .filter(({ id }) => ids.includes(id))
    .sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
};

export default getCaseStudies;
