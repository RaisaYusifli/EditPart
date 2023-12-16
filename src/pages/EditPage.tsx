import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import style from "./EditPage.module.css";

export default function Edit() {
  return (
    <Flex  className={style.container} >
      <Text className={style.heading}>Girov seçimi</Text>
        <FormControl className={style.form}>
          <Text className={style.cif}>
            Müştərinin CİF-ini daxil edərək girovlarının siyahısına baxaq üçün
            axtarış edin
          </Text>
          <FormLabel className={style.customerNumber}>
            Müştəri nömrəsi
          </FormLabel>
          <Input className={style.input} type="email" placeholder="Daxil edin" />
        </FormControl>
    </Flex>
  );
}
