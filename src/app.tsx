import { Button, Rows, Text } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import React from "react";
import styles from "styles/components.css";

export const App = () => {
  const onClick = () => {
    addNativeElement({
      type: "TEXT",
      children: ["Hola Ody!"],
    });
    addNativeElement({
      type: "TEXT",
      children: ["Como estas?"],
    });
  };

  const [state, setState] = React.useState({
    cotizacion_id: "3"
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Text>
          Ingresa el ID de Cotizacion
        </Text>
        <input
          type="text"
          name="cotizacion_id"
          value={state.cotizacion_id}
          placeholder="Color #1"
          onChange={handleChange}
        />
        <Button variant="primary" onClick={onClick} stretch>
          Generar Cotizacion
        </Button>
      </Rows>
    </div>
  );
};
