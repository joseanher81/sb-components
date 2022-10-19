import './mylabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
     /**
     * This is the text to be displayed in the label
     */
    label: string;

     /**
     * These are the possible values for the size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';

    /**
    * If true capitalizes the label
    */
    allCaps?: boolean;

    /**
    * Sets the color of the text
    */
    color?: 'primary' | 'secondary' | 'tertiary';

    /**
    * This sets a custom color for the text
    */
   fontColor?: string;
}

export const MyLabel = ( {
    label   = 'No label',
    size    = 'normal',
    color   = 'primary',
    allCaps = false,
    fontColor
}: MyLabelProps) => {
  return (
    <span 
        className={ `label ${ size } text-${ color }` } 
        style={{ 'color': fontColor }} 
    >
       { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

export default MyLabel;
