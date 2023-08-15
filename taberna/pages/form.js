
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/form.module.css'

const validationSchema = Yup.object({
  titulo: Yup.string().required('El título es obligatorio'),
  techs: Yup.array().of(Yup.string()),
  descripcion: Yup.string().required('La descripción es obligatoria'),
  fotos: Yup.array().of(Yup.string().url('Debe ser una URL válida')),
  video: Yup.string().url('Debe ser una URL válida de YouTube'),
  favorito: Yup.boolean(),
  valoracion: Yup.array().of(Yup.number().min(1).max(5)),
  puntuacion: Yup.number().min(1).max(5),
  comentarios: Yup.array().of(Yup.string())
});

function ProjectForm() {
  const formik = useFormik({
    initialValues: {
      titulo: '',
      techs: [],
      descripcion: '',
      fotos: [],
      video: '',
      favorito: false,
      valoracion: [],
      puntuacion: 0,
      comentarios: []
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Envio de datos al endpoint
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.formulario}>
      <div>
        <label>Título</label>
        <input name="titulo" onChange={formik.handleChange} value={formik.values.titulo} />
        {formik.errors.titulo && <div>{formik.errors.titulo}</div>}
      </div>

      <div>
        <label>Tecnologías (separadas por comas)</label>
        <input name="techs" onChange={formik.handleChange} value={formik.values.techs} />
        {formik.errors.techs && <div>{formik.errors.techs}</div>}
      </div>

      <div>
        <label>Fotos (URLs separadas por comas)</label>
        <input name="fotos" onChange={formik.handleChange} value={formik.values.fotos} />
        {formik.errors.fotos && <div>{formik.errors.fotos}</div>}
      </div>

      <div>
        <label>Valoraciones (números del 1 al 5 separados por comas)</label>
        <input name="valoracion" onChange={formik.handleChange} value={formik.values.valoracion} />
        {formik.errors.valoracion && <div>{formik.errors.valoracion}</div>}
      </div>

      <div>
        <label>Comentarios (separados por comas)</label>
        <input name="comentarios" onChange={formik.handleChange} value={formik.values.comentarios} />
        {formik.errors.comentarios && <div>{formik.errors.comentarios}</div>}
      </div>

      <div>
        <label>Descripción</label>
        <textarea name="descripcion" onChange={formik.handleChange} value={formik.values.descripcion}></textarea>
        {formik.errors.descripcion && <div>{formik.errors.descripcion}</div>}
      </div>

      <div>
        <label>Video (URL de YouTube)</label>
        <input name="video" onChange={formik.handleChange} value={formik.values.video} />
        {formik.errors.video && <div>{formik.errors.video}</div>}
      </div>

      <div>
        <label>Favorito</label>
        <input type="checkbox" name="favorito" onChange={formik.handleChange} checked={formik.values.favorito} />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default ProjectForm;
