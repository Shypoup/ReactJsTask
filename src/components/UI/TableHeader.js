import React from 'react';
import { TableHead , TableRow , TableCell } from '@material-ui/core';
import { useTranslation } from 'react-i18next';



 const TableHeader = () => {
    const {t} = useTranslation();
    return (
        <TableHead>
                  <TableRow>
                    <TableCell>{t("Name")}</TableCell>
                    <TableCell align="right">{t("Status")}</TableCell>
                    <TableCell align="right">{t("Major")}</TableCell>
                   
                  </TableRow>
        </TableHead>
    )
}

export default TableHeader;