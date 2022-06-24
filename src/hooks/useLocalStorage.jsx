import { useState } from "react";

export function useLocalStorage() {
    const [createModalVisible, setCreateModalVisible] = useState(true);
    const [updateModalVisible, setupdateModalVisible] = useState(false);
    return { createModalVisible, setCreateModalVisible, updateModalVisible, setupdateModalVisible };
}
