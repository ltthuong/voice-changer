import React, { useMemo } from "react";
import { useGuiState } from "../001_GuiStateProvider";
import { useAppState } from "../../../001_provider/001_AppStateProvider";
import { t } from "../../../i18n";

export type MoreActionAreaProps = {};

export const MoreActionArea = (_props: MoreActionAreaProps) => {
    const { stateControls } = useGuiState();
    const { webEdition } = useAppState();

    const serverIORecorderRow = useMemo(() => {
        const onOpenMergeLabClicked = () => {
            stateControls.showMergeLabCheckbox.updateState(true);
        };
        const onOpenAdvancedSettingClicked = () => {
            stateControls.showAdvancedSettingCheckbox.updateState(true);
        };
        const onOpenGetServerInformationClicked = () => {
            stateControls.showGetServerInformationCheckbox.updateState(true);
        };
        const onOpenGetClientInformationClicked = () => {
            stateControls.showGetClientInformationCheckbox.updateState(true);
        };
        return (
            <>
                <div className="config-sub-area-control left-padding-1">
                    <div className="config-sub-area-control-title">{t("more...")}</div>
                    <div className="config-sub-area-control-field config-sub-area-control-field-long">
                        <div className="config-sub-area-buttons">
                            <div onClick={onOpenMergeLabClicked} className="config-sub-area-button">
                                {t("Merge Lab")}
                            </div>
                            <div onClick={onOpenAdvancedSettingClicked} className="config-sub-area-button">
                                {t("Advanced Setting")}
                            </div>
                            <div onClick={onOpenGetServerInformationClicked} className="config-sub-area-button">
                                {t("Server Info")}
                            </div>
                            <div onClick={onOpenGetClientInformationClicked} className="config-sub-area-button">
                                {t("Client Info")}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }, [stateControls]);

    if (webEdition) {
        return <> </>;
    } else {
        return <div className="config-sub-area">{serverIORecorderRow}</div>;
    }
};
