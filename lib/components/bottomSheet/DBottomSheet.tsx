import {useCallback, useMemo, useRef} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {theme} from '../../core/theme/theme';

interface DBottomSheetProps {
  initialSize: string;
  maxSize: string;
  minSize: string;
  body?: JSX.Element;
  padding?: number;
  maxHeight?: (index: number) => void;
  backgroundColor?: string;
  indexData?: (index: number) => void;
  index?: number;
  enablePanDownToClose?: boolean;
  onClose?: () => void;
}

export const DBottomSheet = (props: DBottomSheetProps) => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(
    () => [props.minSize, props.initialSize, props.maxSize],
    [props.minSize, props.initialSize, props.maxSize],
  );
  const handleSheetChanges = useCallback((index: number) => {
    return props.indexData ? props.indexData(index) : null;
  }, []);

  return (
    <BottomSheet
      {...props}
      ref={bottomSheetRef}
      index={props.index ?? 1}
      snapPoints={snapPoints}
      enablePanDownToClose={props.enablePanDownToClose ?? false}
      onClose={props.onClose}
      backgroundStyle={{
        backgroundColor: props.backgroundColor ?? theme.colors.surface,
      }}
      onChange={handleSheetChanges}>
      <BottomSheetScrollView>{props.body}</BottomSheetScrollView>
    </BottomSheet>
  );
};
